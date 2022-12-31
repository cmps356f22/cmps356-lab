import { promises as fs } from "fs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await authenticate();
  } else {
    res.status(405).end(`${req.method} is not supported.`);
  }

  async function authenticate() {
    const users = await getUsers();
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).end("Incorrect email or password");
      return;
    }

    const user = users.find(
      (u) => u.email === email.toLowerCase() && u.password === password
    );

    if (!user) {
      res.status(401).end("Incorrect email or password");
    } else {
      const payload = {
        sub: user.id,
        name: user.name,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.status(200).json({
        token,
      });
    }
  }

  async function getUsers() {
    const data = await fs.readFile("data/users.json");
    return JSON.parse(data);
  }
}
