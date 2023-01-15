module.exports = {
  "presets": [
    "next/babel",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "styled-components",
      "inline-react-svg",
      {
        "ssr": true,
        "displayName": true
      }
    ]
  ],
  "env": {
    "test": {
      "plugins": [
        [
          "styled-components",
          {
            "ssr": false,
            "displayName": false
          }
        ]
      ]
    }
  }
}
