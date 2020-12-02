import React from 'react';
import Thumbnail from "../about-us/thumbnail/AboutThumbOne";

const AdsBanner = ({className,thumb, heading, adsLink}) => {
    return (
        <div className={`inner ${className}`}>
            <Thumbnail thumb={thumb}/>
            <div className="content">
                <h4 className="heading heading-h4 text-white">{heading}</h4>
                <div className="banner-btn mt--25">
                    <a className="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between"
                       target="_blank"
                       rel="noopener noreferrer"
                       href={adsLink}>
                        Purchase
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdsBanner;
