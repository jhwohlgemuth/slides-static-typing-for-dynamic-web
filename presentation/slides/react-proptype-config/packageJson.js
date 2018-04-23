module.exports =
`
    {
      "scripts": {
        "lint": "eslint src --fix",
        "lint:watch": "watch 'npm run lint' src"
      },
      "dependencies": {
        "prop-types": "^15.6.1",
        "react": "^16.0.0",
        "react-dom": "^16.0.0"
      },
      "devDependencies": {
        "babel-eslint": "^8.2.3",
        "eslint": "^4.9.0",
        "eslint-plugin-react": "^7.7.0",
        "watch": "^1.0.2"
      }
    }

`
