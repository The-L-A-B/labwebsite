import React from 'react';

const PortfolioItemThree = ({title, thumb, category, className}) => {
    return (
        <div className={`portfolio with-caption mt--30 ${className}`}>
            <div className="thumb video-with-thumb">
                <a href={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={thumb} alt={title}/>
                </a>
            </div>
            <div className="caption-bottom text-left">
                <div className="info">
                    <h5 className="heading heading-h5">
                        <a href={`${process.env.PUBLIC_URL + '/'}`}>{title}</a>
                    </h5>
                    <p className="bk_pra">{category}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemThree;
