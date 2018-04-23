module.exports =
`
    {
      "scripts": {
          "lint": "flow && eslint src --fix",
          "lint:watch": "watch 'npm run lint' src",
      },
      "babel": {
        "presets": [
          "flow"
        ]
      },
      "devDependencies": {
        "babel-eslint": "^8.2.3",
        "babel-preset-flow": "^6.23.0",
        "eslint": "^4.2.0",
        "flow-bin": "^0.70.0",
        "unflowify": "^1.0.1",
        "watch": "^1.0.2"
      },
    }

`;
