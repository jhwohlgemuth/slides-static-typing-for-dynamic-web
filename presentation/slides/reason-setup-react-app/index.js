import React, {Component} from 'react';
import {CodePane, Fill, Heading, Image, Layout, Slide, Text} from 'spectacle';

import '../../../prism-overrides/markupTemplating';

const code = require('./code');
const pkg = require('./package');

export default class extends Component {
    render() {
        return (
            <Slide>
                <Heading fit>ReasonML Setup (create-react-app)</Heading>
                <Layout>
                    <Fill style={{padding: '10px'}}>
                        <CodePane
                            lang="js"
                            source={code}
                        />
                        <Text textColor="#666">package.json</Text>
                        <CodePane
                            lang="js"
                            source={pkg}
                        />
                    </Fill>
                </Layout>
            </Slide>
        );
    }
}
