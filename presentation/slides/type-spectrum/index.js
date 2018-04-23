import React, {Component} from 'react';
import {Fill, Fit, Heading, Layout, Slide, Text} from 'spectacle';

export default class CurryVsChurch extends Component {
    render() {
        return (
            <Slide>
                <Heading style={{marginBottom: '30px'}}>
                    Type Spectrum
                </Heading>
                <Layout>
                    <Fit>
                        <Heading size={4}>Dynamic</Heading>
                        <Text>ESLint</Text>
                        <Text>Testing</Text>
                        <Text>Babel/Webpack</Text>
                        <Text>React.PropTypes</Text>
                    </Fit>
                    <Fill>
                        <Heading size={4}>Gradual</Heading>
                        <Text>Flow</Text>
                        <Text>Some static</Text>
                        <Text>"any" type</Text>
                    </Fill>
                    <Fit>
                        <Heading size={4}>Static</Heading>
                        <Text>Elm</Text>
                        <Text>Rust</Text>
                        <Text>ReasonML</Text>
                        <Text>TypeScript</Text>
                    </Fit>
                </Layout>
            </Slide>
        );
    }
}
