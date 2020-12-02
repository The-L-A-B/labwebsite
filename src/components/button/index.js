import React from 'react';

const Button = ({type, btnText, btnLink, size, btnStyle, color, onClick}) => {
    return (
        type === 'link' ? (
            <a className={`brook-btn bk-btn-${color} btn-${size}-size btn-${btnStyle} space-between`} href={btnLink} onClick={onClick}>
                {btnText}
            </a>
        ) : (
            <button className={`brook-btn bk-btn-${color} btn-${size}-size btn-${btnStyle} space-between`} onClick={onClick}>
                {btnText}
            </button>
        )
    );
};

export default Button;
