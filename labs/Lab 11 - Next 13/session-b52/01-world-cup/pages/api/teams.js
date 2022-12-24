import fs from "fs";

export default async function handler(req, res) {
  for (let i = 0; i < 5e9; i += 1);

  if (req.method === "GET") {
    const file = await fs.promises.readFile("data/teams.json");
    res.status(200).json(JSON.parse(file));
  } else if (req.method === "POST") {
  }
}
