import express from "express";
import fetch from 'node-fetch';

const router = express.Router();

router.route("/api")
  .get(async (req, res) => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    const fields = data.map(country => { return {
      "name": country.name.common, "code": country.cca3,
    }});
    res.json(fields);
  })
  .all((_, res) => res.sendStatus(405));

export default router;
