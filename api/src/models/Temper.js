const { DataTypes } = require("sequelize");

module.exports = (s) => {
  s.define("temper", {
    name: {
      type: DataTypes.STRING,
    },
  });
};
