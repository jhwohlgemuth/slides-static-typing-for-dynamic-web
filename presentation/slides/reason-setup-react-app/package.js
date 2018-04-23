module.exports =
`
    {
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject",
        "prepare": "npm link bs-platform"
      },
      "dependencies": {
        "reason-scripts": "0.8.0"
      },
      "devDependencies": {
        "bs-jest": "^0.3.2",
        "react": "^16.3.2",
        "react-dom": "^16.3.2",
        "reason-react": "^0.3.4"
      }
    }

`;
