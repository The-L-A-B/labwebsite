import React from 'react';

const PortfolioItemOne = ({className, thumb, title}) => {
    return (
        <div className={`portfolio portfolio_style--1 ${className}`}>
            <div className="thumb">
                <img src={thumb} alt={title}/>
            </div>
            <div className="port-overlay-info">
                <div className="hover-action">
                    <h3 className="post-overlay-title"><a href={`${process.env.PUBLIC_URL + '/'}`}>{title}</a></h3>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemOne;
