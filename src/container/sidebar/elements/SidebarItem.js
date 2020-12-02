import React from 'react';

const SidebarItem = ({children, className, title, titleClass}) => {
    return (
        <div className={`bl-sidebar ${className}`}>
            {title && <h5 className={`widget-title ${titleClass}`}>{title}</h5>}
            {children}
        </div>
    );
};

export default SidebarItem;
