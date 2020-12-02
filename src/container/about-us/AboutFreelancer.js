import React from 'react';
import profilePic from '../../assets/img/about/about-7.jpg';
import signature from "../../assets/img/icons/singneture2.png";

const AboutFreelancer = () => {
    return (
        <div className="freelancer-about-area pb--130">
            <div className="inner wow move-up">
                <h2 className="heading heading-h2 font-50 font-400 line-height-1-62">
                    <span className="theme-color">Hello. </span>
                    My name is Blake Gallene.
                </h2>
                <div className="thumb mt--55">
                    <img className="w-100" src={profilePic} alt="about"/>
                </div>
                <div className="bk-separator--40"/>
                <h4 className="heading heading-h4">About me</h4>
                <div className="bk-separator--30"/>
                <p className="bk_pra">
                    I focus on creating creative, original, and conceptual works for
                    editorial illustrations, magazines, covers, and brands as well as online visual
                    organizations. Through constant learning and improving, my works excel in
                    designing.
                </p>
                <div className="bk-separator--40"/>
                <div className="signature">
                    <img src={signature} alt="signature"/>
                </div>

            </div>
        </div>
    );
};

export default AboutFreelancer;
