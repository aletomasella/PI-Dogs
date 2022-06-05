const { Router } = require("express");
const axios = require("axios");
const apiRoutes = require("../apiRoutes");

const router = Router();

router.get("/", async (req, res) => {
  const allTemperaments = [];
  const response = await axios.get(apiRoutes.getFilterData);
  const data = response.data;
  data.forEach((e) => {
    if (e.temperament) {
      e.temperament.forEach((e) => {
        if (!allTemperaments.includes(e)) {
          allTemperaments.push(e);
        }
      });
    }
  });
  res.send(allTemperaments);
});

module.exports = router;
