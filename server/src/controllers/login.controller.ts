import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export class LoginController {
  createToken() {
    return async (req: Request, res: Response) => {
      const secret = process.env.JWT_SECRET || "";
      const username = process.env.DUMMY_USERNAME || "";
      const password = process.env.DUMMY_PASSWORD || "";

      // Check if the username and password match the expected values
      if (req.body.username !== username || req.body.password !== password) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const token = jwt.sign(
        {
          data: req.body.username || "",
        },
        secret,
        { expiresIn: 60 * 600 }
      );

      return res.status(200).json({ token });
    };
  }
}
