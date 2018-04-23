import React from 'react';
import {Heading, Slide, Text} from 'spectacle';

export default class Title extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Static Typing for a Dynamic Web
                </Heading>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                from Flow to ReasonML and back again
                </Text>
            </Slide>
        );
    }
}
