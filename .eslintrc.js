module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb-base", 'plugin:react/recommended'],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    "import/extensions": ['error', 'always', {
      "js": "ignorePackages",
      "jsx": "ignorePackages",
    }],
  },
};

// module.exports = {
//   "extends": "airbnb", 
//   "plugins": [
//     "react"
//   ],
//   "rules": {
//     "react/jsx-uses-react": 1
//   }, 
//   "parserOptions": {
//     "ecmaFeatures": {
//         "jsx": true,
//         "modules": true,
//         "experimentalObjectRestSpread": true
//     }
//   },
//   "globals": {
//     "fetch": true
//   },
//   "env": {
//     "node": true,
//     "es6": true,
//     "browser": true
//     },
// };