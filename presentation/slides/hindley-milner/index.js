import React, {Component} from 'react';
import {Fill, Heading, Image, Layout, List, ListItem, S, Slide, Text} from 'spectacle';

const rules = require('./hindley-milner.png');

export default class TypeInference extends Component {
    render() {
        return (
            <Slide>
                <Layout>
                    <Fill>
                        <Heading size={5}>Hindley-Milner Type Inference</Heading>
                        <List>
                            <ListItem><S type="bold">Var</S>iable</ListItem>
                            <ListItem><S type="bold">App</S>lication</ListItem>
                            <ListItem><S type="bold">Abs</S>traction</ListItem>
                            <ListItem><S type="bold">Let</S></ListItem>
                            <ListItem><S type="bold">Inst</S>antiation</ListItem>
                            <ListItem><S type="bold">Gen</S>eralization</ListItem>
                        </List>
                        <Text>Used by multiple languages like OCaml and Clojure</Text>
                    </Fill>
                    <Fill>
                        <Image src={rules} height={600}/>
                    </Fill>
                </Layout>
            </Slide>
        );
    }
}
