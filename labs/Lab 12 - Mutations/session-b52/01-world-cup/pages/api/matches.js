import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const file = await fs.promises.readFile("data/matches.json");
      res.status(200).json(JSON.parse(file));
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  } else if (req.method === "PATCH") {
    console.log(JSON.parse(req.body));
    // {
    //   team: "away" | "home",
    //   conutry: "QAT",
    //   name: "Qatar"
    // }
    // match id
    // away: country, name
    // home: country, name
    res.status(200).json({});
  }
}
