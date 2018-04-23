import React, {Component} from 'react';
import {Heading, Image, Slide, Text} from 'spectacle';

const image = require('./ChurchvsCurry.png');

export default class CurryVsChurch extends Component {
    render() {
        return (
            <Slide>
                <Heading fit>Church vs Curry</Heading>
                <Text fit>"baked-in" vs "bolted on"</Text>
                <Image src={image} style={{marginTop: '30px'}}/>
            </Slide>
        );
    }
}
