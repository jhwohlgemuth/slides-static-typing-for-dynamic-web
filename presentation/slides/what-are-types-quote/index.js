import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default class QuoteExample extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="secondary" textColor="primary">
                <BlockQuote>
                    <Quote>[A] theory of types is essentially a device for saying that certain combinations are not propositions</Quote>
                    <Cite>Haskell B. Curry (1978)</Cite>
                </BlockQuote>
            </Slide>
        );
    }
}
