const configsEnv = {
  Default: {
    CUSTOMER_NAME: "TosanTechno",
    SERVER_API_URL: process.env.SERVER_API_URL_DEV,
    MAP_SERVER_URL: "https://maps.techstorecenter.ir/tile/{z}/{x}/{y}.png",
  },
  Staging: {
    CUSTOMER_NAME: "MoneyTech",
    SERVER_API_URL: "https://apexapi.tosantechno.com/",
  },
  MoneyTech: {
    CUSTOMER_NAME: "MoneyTech",
    SERVER_API_URL: "https://apexapi.tosantechno.ir/",
  },
};

const env = process.env.BUILD_ENV;
const defaultConfig = configsEnv["Default"];
const envConfig = configsEnv[env] || {};
const CONFIG = { ...defaultConfig, ...envConfig };

module.exports = {
  configsEnv,
  CONFIG,
  //Customer Configs
  SERVER_API_URL: CONFIG.SERVER_API_URL,
};
