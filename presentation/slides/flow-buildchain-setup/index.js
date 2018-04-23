import React, {Component} from 'react';
import {CodePane, Fill, Heading, Image, Layout, Slide, Text} from 'spectacle';

import '../../../prism-overrides/markupTemplating';

const code = require('./code');
const config = require('./eslintrc');
const pkg = require('./package');

export default class extends Component {
    render() {
        return (
            <Slide>
                <Heading fit>Flow Buildchain Setup</Heading>
                <Layout>
                    <Fill style={{padding: '10px'}}>
                        <Text textColor="#666">.eslintrc.js</Text>
                        <CodePane
                            lang="js"
                            source={config}
                        />
                    </Fill>
                    <Fill style={{padding: '10px'}}>
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
