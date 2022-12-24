import fs from "fs";

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const file = await fs.promises.readFile("data/matches.json");
      res.status(200).json(JSON.parse(file));
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}
