import React, {Component} from 'react';
import {CodePane, Fill, Heading, Image, Layout, Slide, Text} from 'spectacle';

import '../../../prism-overrides/markupTemplating';

const code = require('./code');
const error = require('./proptype-lint-error.png');

export default class extends Component {
    render() {
        return (
            <Slide>
                <Heading fit>Linters as Assistants</Heading>
                <Text style={{paddingBottom: '10px'}}>React PropType error messages</Text>
                <Layout>
                    <Fill style={{padding: '10px'}}>
                        <CodePane
                            lang="js"
                            source={code}
                        />
                    </Fill>
                    <Fill>
                        <Image src={error} />
                    </Fill>
                </Layout>
            </Slide>
        );
    }
}
