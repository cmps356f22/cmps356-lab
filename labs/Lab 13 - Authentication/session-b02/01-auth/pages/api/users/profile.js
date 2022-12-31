import { promises as fs } from "fs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  // const decoded = jwt.decode(id_token);
  // console.log(decoded);

  try {
    const decoded = jwt.verify(id_token, process.env.JWT_SECRET);
    console.log(decoded);
  } catch (e) {
    console.error(e);
  }
}
