import React from 'react';
import Proptypes from 'prop-types';

const PortfolioItemFive = ({className,title,thumb,category}) => {
    return (
        <div className={`portfolio portfolio_style--1 ${className}`}>
            <div className="poss_relative">
                <div className="thumb">
                    <img src={thumb} alt={title}/>
                </div>
                <div className="port-overlay-info with-caption position-left font-playfair">
                    <div className="hover-action">
                        <h3 className="post-overlay-title"><a href={`${process.env.PUBLIC_URL + '/'}`}>{title}</a></h3>
                        <div className="category">{category}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PortfolioItemFive.propTypes = {
    className: Proptypes.string
}

export default PortfolioItemFive;
