import React from 'react';

const SectionTitleOne = ({heading, headingColor, className, wrapperClass, separator, separatorColor}) => {
    return (
        <div className={`brook-section-title ${wrapperClass}`}>
            <h3 className={`heading ${className}`} style={{color: headingColor ? headingColor : '#000000'}}>
                <span dangerouslySetInnerHTML={{__html: heading}}/>
            </h3>
            {separator && (
                <>
                    <div className="bk-separator--25"/>
                    <div className={`title-separator w--80 color-${separatorColor ? separatorColor : 'blue'}`}/>
                </>
            )}
        </div>
    );
};

export default SectionTitleOne;