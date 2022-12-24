import fs from "fs";

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      for (let i = 1; i < 1e9; i += 1) {}
      const file = await fs.promises.readFile("data/teams.json");
      res.status(200).json(JSON.parse(file));
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}
