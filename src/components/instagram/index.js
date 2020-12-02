import React from 'react';

const Instagram = ({data, variant}) => {
    return (
        <div className={`item-grid ${variant}`}>
            <div className="thumb">
                <a href={process.env.PUBLIC_URL + "/"}>
                    <img src={require('../../assets/img/instagram/instagram-1/' + data.thumb)} alt="instagram images"/>
                </a>
                <div className="item-info">
                    <div className="inner">
                        <a href={process.env.PUBLIC_URL + "/"}>
                            <i className="fa fa-heart"/>{data.likes}
                        </a>
                        <a href={process.env.PUBLIC_URL + "/"}>
                            <i className="fa fa-comments"/>{data.comments}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;