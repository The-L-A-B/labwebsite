import React from 'react';

const SectionTitleTwo = ({className, center, title, heading}) => {
    return (
        <div className={`section-title ${center ? 'text-center' : ''} ${className}`}>
            <h3>{title}</h3>
            <h2>{heading}</h2>
        </div>
    );
};

export default SectionTitleTwo;
