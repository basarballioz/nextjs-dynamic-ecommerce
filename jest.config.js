module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
