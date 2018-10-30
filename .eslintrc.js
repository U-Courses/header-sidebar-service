module.exports = {
  "extends": "airbnb-base", 
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
}
};