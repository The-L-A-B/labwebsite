import React from 'react';
import Instagram from "../../components/instagram";
import instagramFeedData from '../../data/instagram';

const InstagramFeedOne = () => {
    return (
        <div className="brook-instagram-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
            <div className="bk-instagram-list instagram-grid">
                <div className="instagram-grid-wrap instagram-grid-5 pl--30 pr--30">
                    {instagramFeedData.map(instagram=>(
                        <Instagram data={instagram} variant="grid-style--1"/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramFeedOne;