module.exports =
`
    {
      "scripts": {
        "build": "bsb -make-world",
        "start": "bsb -make-world -w",
        "clean": "bsb -clean-world",
        "test": "echo \"Error: no test specified\" && exit 1",
        "webpack": "webpack -w",
        "webpack:production": "NODE_ENV=production webpack"
      },
      "dependencies": {
        "react": "^16.2.0",
        "react-dom": "^16.2.0",
        "reason-react": ">=0.3.4"
      },
      "devDependencies": {
        "bs-platform": "^2.2.3",
        "webpack": "^4.0.1",
        "webpack-cli": "^2.0.10"
      }
    }

`;
