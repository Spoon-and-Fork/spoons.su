import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const SECRET_KEY = String(process.env.JWT_SECRET);

const getUsers = () => {
    const usersFilePath = path.join(process.cwd(), "users.json");
    if (!fs.existsSync(usersFilePath)) return [];
    return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
};

export async function GET(req: Request) {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log("Unauthorized");
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { username: string };

        const users = getUsers();
        const user = users.find((u: Account) => u.username === decoded.username);

        if (!user) {
            console.log("User not found");
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ accounts: user.accounts || [] }), { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid token", error_info: error }), { status: 401 });
    }
}