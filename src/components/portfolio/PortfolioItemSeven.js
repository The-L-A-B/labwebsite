import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItemSeven = ({title, thumb, category, className}) => {
    return (
        <div className={`has-center-content ${className}`}>
            <div className="has-center-inner">
                <div className="thumb">
                    <img src={thumb} alt={title}/>
                </div>
                <div className="content">
                    <h6 className="heading heading-h6 roboto-font third-color">{category}</h6>
                    <div className="bk-separator--30"/>
                    <h1 className="heading heading-h1 playfair-font line-height-1-39">
                        <a className="text-white" href={`${process.env.PUBLIC_URL + '/'}`}>{title}</a>
                    </h1>
                    <div className="bk-separator--55"/>
                    <div className="read-more-btn">
                        <a href={`${process.env.PUBLIC_URL + '/'}`}>
                            <span>Project details</span>
                            <i className="fa fa-arrow-right"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

PortfolioItemSeven.propTypes = {
    className: PropTypes.string
};

export default PortfolioItemSeven;
