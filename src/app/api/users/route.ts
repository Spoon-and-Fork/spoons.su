import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
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

    const usersFilePath = path.join(process.cwd(), "users.json");

    if (!fs.existsSync(usersFilePath)) {
      return new Response(JSON.stringify({ users: [] }), { status: 200 });
    }

    const usersData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    const usersList = usersData.map((user: { username: Account; role: Account; }) => ({
      username: user.username,
      role: user.role,
    }));

    return new Response(JSON.stringify({ users: usersList }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid token", error_info: error }), { status: 401 });
  }
}
