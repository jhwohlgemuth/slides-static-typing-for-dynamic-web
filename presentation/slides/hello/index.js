import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {Slide} from 'spectacle';

const Hello = ({className}) => (
    <Slide>
    	<div className={className}>Hello!</div>
        <span>This component is styled with Emotion</span>
    </Slide>
);
const FancyHello = styled(Hello)`
    color: hotpink;
    font-size: 4em;
`;
Hello.propTypes = {
    className: PropTypes.string
};

export default FancyHello;
