import React from 'react';
import {Link, Slide, Text} from 'spectacle';

export default class Title extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="primary">
                <Text>
                    The essential property of type soundness is “type preservation”,
                    which says that a type system’s approximation of the result of a
                    computation (a type) is “preserved” at every intermediate computational stage.
                </Text>
                <Link href="http://frenchy64.github.io/2018/04/07/unsoundness-in-untyped-types.html">
                    Are unsound type systems wrong?
                </Link>
            </Slide>
        );
    }
}
