import React from 'react';

const IconBoxItemTwo = ({data}) => {
    return (
        <div className="icon-box icon-box--2 mt--30 text-center">
            <div className="inner">
                <div className="icon">
                    <div className="ht-svg" data-svg={require('../../assets/img/iconbox/' + data.icon)}/>
                </div>
                <div className="content">
                    <h5 className="heading heading-h5">{data.title}</h5>
                    <p className="bk_pra">{data.content}</p>
                    <a className="icon-btn" href={data.btnLink}>
                        <span>{data.btnText}</span>
                        <i className="fa fa-arrow-right"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default IconBoxItemTwo;