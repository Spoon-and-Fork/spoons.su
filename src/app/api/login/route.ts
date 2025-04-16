import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ error: "Username and password are required" }), { status: 400 });
  }

  try {
    const usersFilePath = path.join(process.cwd(), "users.json");

    if (!fs.existsSync(usersFilePath)) {
      return new Response(JSON.stringify({ error: "No users found" }), { status: 404 });
    }

    const usersData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    const user = usersData.find((user: Account) => user.username === username); 

    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const token = jwt.sign(
      { username: user.username, role: user.role }, // Теперь передаем `role`
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    return new Response(JSON.stringify({ token, role: user.role }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error logging in", error_info: error }), { status: 500 });
  }
}
