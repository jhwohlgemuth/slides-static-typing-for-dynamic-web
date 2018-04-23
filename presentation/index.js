import React from 'react';
import {Deck} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from '../spectacle-code-slide';
import Title from './slides/title';
import WhatAreTypes from './slides/what-are-types';
import WhyTypesCreated from './slides/why-types-created';
import WhatAreTypesQuote from './slides/what-are-types-quote';
import WhatIsTypeSoundness from './slides/what-is-type-soundness';
import ReasonBeforeRunning from './slides/reason-before-running';
import CurryVsChurch from './slides/curry-vs-church';
import TypeSpectrum from './slides/type-spectrum';
import TypeInference from './slides/hindley-milner';
import ReactPropTypes from './slides/react-proptypes';
import ReactEslintConfig from './slides/react-proptype-config';
import CheckersAsAssistants from './slides/checkers-as-assistants';
import CompilersAsAssistants from './slides/compilers-as-assistants';
import FlowInit from './slides/flow-init';
import FlowBuildchainSetup from './slides/flow-buildchain-setup';
import FlowJestSupport from './slides/flow-jest-support';
import ReasonSetupReactApp from './slides/reason-setup-react-app';
import ReasonSetupBsb from './slides/reason-setup-bsb';

require('normalize.css');
require('prismjs/themes/prism-solarizedlight.css');

import 'prismjs';
// import 'prismjs/components/prism-kotlin';
import '../prism-overrides/markupTemplating';
// import '../prism-overrides/elm';
// import '../prism-overrides/clojure';
// import '../prism-overrides/fsharp';
import '../prism-overrides/reason';
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

import javascript from './examples/javascript';
import javascriptFlow from './examples/javascript+flow';
import reasonml from './examples/reasonml';

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={[]} transitionDuration={0} theme={theme}>
                <Title />
                <WhatAreTypes />
                <WhyTypesCreated />
                <WhatAreTypesQuote />
                <WhatIsTypeSoundness />
                <ReasonBeforeRunning />
                <CurryVsChurch />
                <TypeSpectrum />
                <TypeInference />
                <ReactPropTypes />
                <CheckersAsAssistants />
                <CompilersAsAssistants />
                <ReactEslintConfig />
                <FlowInit />
                <FlowBuildchainSetup />
                <FlowJestSupport />
                <ReasonSetupReactApp />
                <ReasonSetupBsb />
                <CodeSlide
                    bgColor="#fdf6e3"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={javascript}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 11], title: 'Just JS'},
                        {loc: [0, 1], title: 'Just JS', note: 'JS does not have implicit types...'},
                        {loc: [1, 4], title: 'Just JS'},
                        {loc: [4, 11], title: 'Just JS'},
                        {loc: [0, 11], title: 'Just JS'}/* eslint-enable no-magic-numbers */
                    ]}/>
                <CodeSlide
                    bgColor="#fdf6e3"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={javascriptFlow}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 12], title: 'JS + Flow'},
                        {loc: [1, 5], title: 'JS + Flow'},
                        {loc: [5, 8], title: 'JS + Flow'},
                        {loc: [8, 12], title: 'JS + Flow'},
                        {loc: [0, 12], title: 'JS + Flow'}/* eslint-enable no-magic-numbers */
                    ]}/>
                <CodeSlide
                    bgColor="#fdf6e3"
                    transition={[]}
                    lang="reason"
                    showLineNumbers={false}
                    code={reasonml}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 15], title: 'ReasonML'},
                        {loc: [1, 7], title: 'ReasonML'},
                        {loc: [7, 10], title: 'ReasonML'},
                        {loc: [10, 15], title: 'ReasonML'}/* eslint-enable no-magic-numbers */
                    ]}/>
            </Deck>
        );
    }
}
