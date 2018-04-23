import React, {Component} from 'react';
import {CodePane, Fill, Heading, Image, Layout, Slide, Text} from 'spectacle';

import '../../../prism-overrides/markupTemplating';

const code = require('./code');
const error = require('./flow-error.png');

export default class extends Component {
    render() {
        return (
            <Slide>
                <Heading fit>Checkers as Assistants</Heading>
                <Text style={{paddingBottom: '10px'}}>Flow error messages</Text>
                <Layout>
                    <Fill style={{padding: '10px'}}>
                        <CodePane
                            lang="js"
                            source={code}
                        />
                    </Fill>
                    <Fill style={{padding: '10px'}}>
                        <Image src={error} />
                    </Fill>
                </Layout>
            </Slide>
        );
    }
}
