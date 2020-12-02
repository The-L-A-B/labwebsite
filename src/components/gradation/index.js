import React from 'react';

const GradationItem = ({count, heading, content, color}) => {
    return (
        <div className="item-grid mt--40 wow move-up">
            <div className="line"/>
            <div className="dot-wrap">
                <div className="dot" style={{background: color ? color : '#0038E3'}}>
                    <div className="count">{count}</div>
                </div>
            </div>
            <div className="content">
                <h5 className="heading heading-h5">{heading}</h5>
                <p className="bk_pra">{content}</p>
            </div>
        </div>
    );
};

export default GradationItem;
