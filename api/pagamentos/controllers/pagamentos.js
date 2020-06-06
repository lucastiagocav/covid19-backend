"use strict";
const axios = require("axios").default;

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getCovidData: async (ctx) => {
    const { data } = await axios.get(
      "https://covid19-brazil-api.now.sh/api/report/v1"
    );
    ctx.send(data);
  },
};
