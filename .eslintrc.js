module.exports = {
  "extends": "airbnb", 
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": 1
  }, 
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
    }
  },
  "globals": {
    "fetch": true
  },
  "env": {
    "node": true,
    "es6": true,
    "browser": true
    },
};