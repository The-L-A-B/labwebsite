import React from 'react';

const IconListItemOne = ({data}) => {
    return (
        <div className="single-motive-speech wow move-up mt--30">
            <div className="icon">
                <i className={`${data.iconClass} theme-color`}/>
            </div>
            <div className="content">
                <h4>{data.title}</h4>
                <p className="bk_pra heading-font pr--40">{data.content}</p>
            </div>
        </div>
    );
};

export default IconListItemOne;
