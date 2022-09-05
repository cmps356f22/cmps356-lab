import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.route("/api")
  .get(async (_, res) => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const countries = data.map(ele => {
      return { name: ele.name.common, code: ele.cca3 };
    });

    res.send(countries);
  })
  .all((_, res) => res.sendStatus(405));

router.route("*")
  .all((req, res) => {
    res.sendStatus(404);
  });

export default router;
