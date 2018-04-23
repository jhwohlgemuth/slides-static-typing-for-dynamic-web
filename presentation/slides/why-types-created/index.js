import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default class QuoteExample extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="secondary" textColor="primary">
                <BlockQuote>
                    <Quote>Type theory was invented by Russell to explain the paradoxes...</Quote>
                    <Cite>Haskell B. Curry (1978)</Cite>
                </BlockQuote>
            </Slide>
        );
    }
}
