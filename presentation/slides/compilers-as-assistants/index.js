import React, {Component} from 'react';
import {Fill, Heading, Image, Layout, Slide, Text} from 'spectacle';

const ifThen = require('./elm-compiler-if-then.png');
const patternMatching = require('./elm-compiler-pattern-matching.png');

export default class extends Component {
    render() {
        return (
            <Slide>
                <Heading fit>Compilers as Assistants</Heading>
                <Text style={{paddingBottom: '10px'}}>Elm error messages</Text>
                <Layout>
                    <Fill style={{padding: '10px'}}>
                        <Image src={ifThen} />
                    </Fill>
                    <Fill style={{padding: '10px'}}>
                        <Image src={patternMatching} />
                    </Fill>
                </Layout>
            </Slide>
        );
    }
}
