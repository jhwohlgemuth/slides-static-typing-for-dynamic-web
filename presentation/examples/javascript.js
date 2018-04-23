module.exports =
`
    const isEven: Predicate = x => (x % 2 === 0);
    const timesTen: Morphism = x => (x * 10);
    const log: Callback = x => console.log(x);
    [...Array(100).keys()]
        .filter(isEven)
        .map(timesTen)
        .forEach(log);

`;
