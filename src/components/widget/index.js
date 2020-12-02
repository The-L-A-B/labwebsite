import React from 'react';

const Widget = ({children, wrapClasses, title}) => {
    return (
        <div className={`footer-widget ${wrapClasses ? wrapClasses : ''}`}>
            {title && <h2 className="widget-title">{title}</h2>}
            {children}
        </div>
    );
};

export default Widget;