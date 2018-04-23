import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default class QuoteExample extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="secondary" textColor="primary">
                <BlockQuote>
                    <Quote>Example Quote</Quote>
                    <Cite>Author</Cite>
                </BlockQuote>
            </Slide>
        );
    }
}
