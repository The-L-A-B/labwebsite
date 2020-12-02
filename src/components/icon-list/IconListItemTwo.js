import React from 'react';

const IconListItemTwo = ({data}) => {
    return (
        <div className="single-motive-speech wow move-up">
            <div className="icon">
                <i className={`${data.iconClass} text-white`}/>
            </div>
            <div className="content">
                <h4 className="text-white">{data.title}</h4>
                <p className="bk_pra heading-font pr--40 text-white">{data.content}</p>
            </div>
        </div>
    );
};

export default IconListItemTwo;
