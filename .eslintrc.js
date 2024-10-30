// https://docs.expo.dev/guides/using-eslint/
/* module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
      "prettier/prettier" : "error",
  },
}; */

module.exports = {
  extends: [
    "expo", // Extends Expo's ESLint configuration for React Native
    "plugin:prettier/recommended", // Enables Prettier as an ESLint plugin
  ],
  plugins: ["prettier"], // Adds Prettier as a plugin
  rules: {
    "prettier/prettier": "error", // Throws an error if Prettier formatting rules are violated
  },
  env: {
    browser: true,
    es2021: true, // Adds support for the latest ECMAScript features
  },
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
  },
};
