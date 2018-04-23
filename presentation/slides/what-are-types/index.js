import React from 'react';
import {Heading, S, Slide, Text} from 'spectacle';

export default class Title extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                What are types?
                </Heading>
                <Text>
                    "...a data type or simply <S type="italic">type</S> is a classification of data which
                    tells the compiler or interpreter how the programmer intends to use the data" –Wikipedia
                </Text>
            </Slide>
        );
    }
}
