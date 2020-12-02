import React from 'react';

const PortfolioItemFour = ({className, title, thumb, category}) => {
    return (
        <div className={`portfolio with-caption no--padding hover-image-zoom ${className}`}>
            <div className="thumb mb--20">
                <a href={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={thumb} alt={title}/>
                </a>
                <a className="port-plus-view" href={`${process.env.PUBLIC_URL + '/'}`}>&nbsp;</a>
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

export default PortfolioItemFour;
