import React, {Component} from 'react';
import {CodePane, Fill, Heading, Image, Layout, Slide, Text} from 'spectacle';

import '../../../prism-overrides/markupTemplating';

const code = require('./code');
const pkg = require('./packageJson');

export default class extends Component {
    render() {
        return (
            <Slide>
                <Heading fit>React ESLint Setup</Heading>
                <Layout>
                    <Fill style={{padding: '10px'}}>
                        <Text textColor="#666">.eslintrc.js</Text>
                        <CodePane
                            lang="js"
                            source={code}
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
