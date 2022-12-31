import { promises as fs } from "fs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1] ?? null;

    if (token) {
      try {
        // const decoded = jwt.decode(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).end(JSON.stringify(decoded));
      } catch (e) {
        res.status(401).end("Invalid token");
      }
    } else {
    }
    // check whether a JWT is sent
    // verify JWT
    // make sure the user has access to the information requested
    // return user information
  }
}
