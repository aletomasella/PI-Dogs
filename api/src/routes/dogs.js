const { Router } = require("express");
const axios = require("axios");
const apiRoutes = require("../apiRoutes");
const { apiKey } = require("../../../../PI-Videogames/api/src/db");
const { filterData, filterDataForNamesSearch } = require("../utils");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const response = await axios.get(`${apiRoutes.searchForBreed}${name}`);
    if (response.data.length) {
      const filterBreeds = response.data.map((e) =>
        filterDataForNamesSearch(e)
      );
      res.send(filterBreeds);
      return;
    } else {
      res.status(404).send("No matching result.");
      return;
    }
  }
  const response = await axios.get(`${apiRoutes.breeds}${apiKey}`);

  const filterBreeds = response.data.map((e) => filterData(e));

  res.send(filterBreeds);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(`${apiRoutes.breeds}${apiKey}`);
  const match = response.data.filter((e) => e.id === Number(id));
  if (match[0]) {
    const filterMatch = filterData(match[0]);
    res.send(filterMatch);
  } else {
    res.status(404).send("No matching result.");
  }
});

module.exports = router;
