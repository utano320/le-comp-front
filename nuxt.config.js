require("dotenv").config();

module.exports = {
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "@nuxtjs/font-awesome"],
  env: {
    API_HOST: process.env.API_HOST || "localhost"
  },
  head: {
    title: "le-comp",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "WDxSF分析ツール" }
    ]
  },
  css: ["milligram", "~/assets/css/main.css"]
};
