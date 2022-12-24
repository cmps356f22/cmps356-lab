import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const file = await fs.promises.readFile("data/matches.json");
    res.status(200).json(JSON.parse(file));
  } else if (req.method === "POST") {
    // OR "PUT" OR "DELETE"
    // console.log(req.body);
    // res.status(200).json({ message: "ok" });
    // const file = await fs.promises.writeFile("data/test.json", req.body);
  }
}
