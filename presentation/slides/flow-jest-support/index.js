import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default class QuoteExample extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="secondary" textColor="primary">
                <BlockQuote>
                    <Quote>Flow is supported, if you are getting this error, it's because you didn't properly set up your babel build pipeline.</Quote>
                    <Cite>Christoph Nakazawa (Jest core member on GitHub)</Cite>
                </BlockQuote>
            </Slide>
        );
    }
}
