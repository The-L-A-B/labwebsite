import React from 'react';

const SocialIconItem = ({socialMedia, username, className, type}) => {

    return (
        <li className={socialMedia}>
            <a
                href={`https://${socialMedia}.com/${username}`}
                className={className}
                aria-label={socialMedia}
            >
                {type === 'icon' && <i className={`fa fa-${socialMedia}`}/>}
                {type === 'text' && <span style={{textTransform: 'capitalize'}}>{socialMedia}</span>}
            </a>
        </li>
    );
};

export default SocialIconItem;
