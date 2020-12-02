import React from 'react';

const AboutThumbOne = ({className, thumb}) => {
    return (
        <div className={`thumb text-left wow move-up ${className && className}`}>
            <img src={thumb} alt="thumb"/>
        </div>
    );
};

export default AboutThumbOne;
