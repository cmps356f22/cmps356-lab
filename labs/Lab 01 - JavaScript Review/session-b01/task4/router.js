import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.route("/api")
  .get(async (req, res) =>{
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    res.send(data.map(val => {
      return { name: val.name.common, code: val.cca3 }
    }));
  })
  .all((_, res) => res.sendStatus(405));

router.route("*")
  .all((_, res) => {
    res.sendStatus(404);
  });

export default router;
