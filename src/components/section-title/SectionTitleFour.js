import React from 'react';

const SectionTitleFour = ({title, heading, wrapperClass, center, className}) => {
    return (
        <div className={`brook-section-title ${center ? 'text-center' : ''} ${wrapperClass}`}>
            <h6 className={`heading heading-h6 letter-spacing-3 ${className}`}>{title}</h6>
            {heading ? (<div className="bk-separator--25"/>) : null}
            <h2 className="heading heading-h2 heading-font">{heading}</h2>
        </div>
    );
};

export default SectionTitleFour;
