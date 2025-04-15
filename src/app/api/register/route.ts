import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { username: string; role: string };

    if (decoded.role !== "admin") {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
    }

    const { username, password, role = "user" } = await req.json(); // По умолчанию role = "user"

    if (!username || !password) {
      return new Response(JSON.stringify({ error: "Username and password are required" }), { status: 400 });
    }

    const usersFilePath = path.join(process.cwd(), "users.json");

    if (!fs.existsSync(usersFilePath)) {
      fs.writeFileSync(usersFilePath, JSON.stringify([]));
    }

    const usersData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    if (usersData.find((user: Account) => user.username === username)) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = { username, password: hashedPassword, role }; // Добавляем роль пользователя
    usersData.push(newUser);

    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));

    return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid token", error_info: error }), { status: 401 });
  }
}
