import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ valid: false });
  }

  const secretKey = process.env.JWT_SECRET;
  
  if (!secretKey) {
    return res.status(500).json({ error: "JWT_SECRET is not defined" });
  }

  try {
    jwt.verify(token, secretKey);
    return res.status(200).json({ valid: true });
  } catch (error) {
    return res.status(401).json({ valid: false, info: error });
  }
}
