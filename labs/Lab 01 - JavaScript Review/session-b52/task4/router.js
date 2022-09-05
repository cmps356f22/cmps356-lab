import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.route("/api")
  .get(async (_, res) => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    res.send(data.map(country => ({
      name: country.name.common, code: country.cca3
    })));
  })
  .all((_, res) => res.sendStatus(405));

router.route("*")
  .all((_, res) => {
      res.sendStatus(404);
      // res.send({});
  });

export default router;
