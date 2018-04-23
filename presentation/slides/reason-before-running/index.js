import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default class QuoteExample extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="secondary" textColor="primary">
                <BlockQuote>
                    <Quote>
                        ...you can begin to think of the program having properties
                        you can reason about even if you never run the program.
                    </Quote>
                    <Cite>Eric Normand (2014)</Cite>
                </BlockQuote>
            </Slide>
        );
    }
}
