import React from 'react';

const Navigation = () => {
    return (
        <div className="post-nav-list mb--45 wow move-up">
            <div className="nav-item previous">
                <a href={`${process.env.PUBLIC_URL + "/blog-details"}`}>
                    <div className="link-text">
                        <span className="fa fa-arrow-left"/>
                        <p>Prev</p>
                    </div>
                    <span>US Ranks Near Bottom on Development Commitment</span>
                </a>
            </div>
            <div className="nav-item next mt_sm--30">
                <a href={`${process.env.PUBLIC_URL + "/blog-details"}`}>
                    <div className="link-text">
                        <p>Next</p>
                        <span className="fa fa-arrow-right"/>
                    </div>
                    <span>Career Tips For Emerging Photographers</span>
                </a>
            </div>
        </div>
    );
};

export default Navigation;
