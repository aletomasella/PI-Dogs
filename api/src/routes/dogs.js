const { Router } = require("express");
const axios = require("axios");
const apiRoutes = require("../apiRoutes");
const { apiKey } = require("../../../../PI-Videogames/api/src/db");
const { filterData } = require("../utils");

const router = Router();

router.get("/", async (req, res) => {
  const response = await axios.get(`${apiRoutes.breeds}${apiKey}`);

  const filterBreeds = response.data.map((e) => filterData(e));

  res.send(filterBreeds);
});

module.exports = router;
