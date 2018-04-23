import React from 'react';
import {Deck} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from '../spectacle-code-slide';
import Title from './slides/title';
import Hello from './slides/hello';
import Headings from './slides/headings';
import ListExample from './slides/list';
import QuoteExample from './slides/quote';

require('normalize.css');
require('prismjs/themes/prism-solarizedlight.css');

import 'prismjs';
// import 'prismjs/components/prism-kotlin';
// import '../prism-overrides/elm';
// import '../prism-overrides/clojure';
// import '../prism-overrides/fsharp';
// import '../prism-overrides/reason';
// import '../prism-overrides/rust';

const theme = createTheme({
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica'
});

import code from './examples/code';

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={[]} transitionDuration={0} theme={theme}>
                <Title />
                <Hello />
                <Headings />
                <ListExample />
                <QuoteExample />
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={code}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 7], title: 'Code'},
                        {loc: [0, 1]},
                        {loc: [1, 2]},
                        {loc: [1, 2], note: 'Heres a note!'}/* eslint-enable no-magic-numbers */
                    ]}/>
            </Deck>
        );
    }
}
