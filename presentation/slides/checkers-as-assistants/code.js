module.exports =
`
    type ServerGenerator = {
        options: {
            http: string,
            https: string,
            graphql: string,
            ws: string
        }
    };

    function doSomething() {
        const generator: ServerGenerator = this;
        const {foo, options} = generator;
        const {http, https, ws, graphql} = options;
        // code code code
    }
`;
