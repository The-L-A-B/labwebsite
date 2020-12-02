import React from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';

const TypedText = ({content, loop, backSpeed, typeSpeed}) => {
    return (
        <Typed
            strings={content}
            typeSpeed={typeSpeed}
            backSpeed={backSpeed}
            loop={!!loop}
        />
    );
};

TypedText.prototype = {
    content: PropTypes.array,
    loop: PropTypes.bool,
    backSpeed: PropTypes.number
}

export default TypedText;
