import React from 'react';

const LightweightSliderItem = ({bgImage, title, heading, content, btnText, btnLink}) => {
    return (
        <div className="hero-item bg-image"
             style={{backgroundImage: `url(${require('../../assets/img/revolution/' + bgImage)})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-content-2 center">
                            <h6>{title}</h6>
                            <h3>{heading}</h3>
                            {content && <p>content</p>}
                            <a className="brook-btn bk-btn-white btn-sd-size btn-rounded space-between"
                               href={`${process.env.PUBLIC_URL + btnLink}`}>
                                {btnText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LightweightSliderItem;
