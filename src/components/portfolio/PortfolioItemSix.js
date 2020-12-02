import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItemSix = ({title,thumb,category, className}) => {
    return (
        <div className={`portfolio-cation mt--30 ${className ? className : ''}`}>
            <div className="poss_relative">
                <div className="thumb">
                    <img src={thumb} alt={title} />
                </div>
                <div className="port-overlay-info">
                    <div className="hover-action">
                        <h3 className="post-overlay-title">
                            <a href={`${process.env.PUBLIC_URL + '/'}`}>{title}</a>
                        </h3>
                        <div className="category">{category}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PortfolioItemSix.propTypes = {
    className: PropTypes.string
}

export default PortfolioItemSix;
