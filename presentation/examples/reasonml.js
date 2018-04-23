module.exports =
`
    let rec range = (start: int, stop: int) =>
      if (start >= stop) {
        [];
      } else {
        [start, ...range(start + 1, stop)];
      };
    let isEven = x => x mod 2 == 0;
    let timesTen = x => x * 10;
    let log = x => Js.log(x);
    range(0, 100)
    |> List.filter(isEven)
    |> List.map(timesTen)
    |> log;
`;
