import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItemTwo = ({title, thumb, category, className}) => {
    return (
        <div className={`portfolio portfolio_style--2 mt--30 ${className}`}>
            <div className="thumb">
                <img src={thumb} alt={title}/>
            </div>
            <div className="portfolio-overlay"/>
            <div className="port-overlay-info">
                <div className="content">
                    <h3 className="port-title">{title}</h3>
                    <div className="category">{category}</div>
                </div>
            </div>
        </div>
    );
};

PortfolioItemTwo.propTypes = {
    className: PropTypes.string
};

export default PortfolioItemTwo;
