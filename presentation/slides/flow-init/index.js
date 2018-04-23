import React, {Component} from 'react';
import {CodePane, Fill, Heading, Image, Layout, Slide, Text} from 'spectacle';

import '../../../prism-overrides/markupTemplating';

const code = require('./code');
const config = require('./config');
const types = require('./types');

export default class extends Component {
    render() {
        return (
            <Slide>
                <Heading>Flow Init</Heading>
                <Layout>
                    <Fill style={{padding: '10px'}}>
                        <Text textColor="#666">foo.js</Text>
                        <CodePane
                            lang="js"
                            source={code}
                        />
                    </Fill>
                    <Fill style={{padding: '10px'}}>
                        <Text textColor="#666">types.js</Text>
                        <CodePane
                            lang="js"
                            source={types}
                        />
                        <Text textColor="#666">.flowconfig</Text>
                        <CodePane
                            lang="json"
                            source={config}
                        />
                    </Fill>
                </Layout>
            </Slide>
        );
    }
}
