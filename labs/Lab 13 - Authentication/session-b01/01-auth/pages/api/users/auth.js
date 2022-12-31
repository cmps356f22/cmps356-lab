import { promises as fs } from "fs";
import jwt from "jsonwebtoken";

async function fetchUsers() {
  const data = await fs.readFile("data/users.json");
  return JSON.parse(data);
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return authenticate();

    async function authenticate() {
      const users = await fetchUsers();
      const { email, password } = req.body;

      const user = users.find(
        (u) => u.email == email.toLowerCase() && u.password == password
      );

      if (!user) {
        res.status(401).end("Incorrect email or password.");
        return;
      }

      const id_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      // try {
      //   const decoded = jwt.verify(id_token, process.env.JWT_SECRET);
      //   console.log("Valid signature", decoded);
      // } catch (e) {
      //   console.error("Invalid signature");
      // }

      res.status(200).json({
        id_token,
        name: user.name,
      });
    }
  } else {
    res.status(500).end(`${req.method} is not supported.`);
  }
}
