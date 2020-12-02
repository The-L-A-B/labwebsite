import React from 'react';

const CallContentVertical = ({heading, headingColor, btnText, btnLink, btnClasses}) => {
    return (
        <div className="call-content vertical-call-to-action text-center">
            <h3 className="heading heading-h3" style={{color: headingColor}}>{heading}</h3>
            <div className="spacing"/>
            <div className="call-btn text-center">
                <a className={`brook-btn ${btnClasses}`}
                   href={btnLink}
                >
                    {btnText}
                </a>
            </div>
        </div>
    );
};

export default CallContentVertical;