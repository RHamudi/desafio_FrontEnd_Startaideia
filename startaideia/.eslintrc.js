module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-undef": "off",
    "react/jsx-no-bind": 0,
  },
};
