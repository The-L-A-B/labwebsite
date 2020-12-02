import React from 'react';
import SectionTitle from "../../components/section-title/SectionTitleOne";

const ContactThree = () => {
    return (
        <div className="freelancer-contact-area pb--100 pt--150">
            <div className="contact-inner">
                <SectionTitle
                    heading={'Message Me.'}
                    className="heading-h2 font-50 font-400 line-height-1-62"
                />
                <div className="content">
                    <div className="bk-separator--25"/>
                    <p className="bk_pra pr--40 wow move-up">
                        If you have any questions at all about starting a blog or website after reading the guide, please do not hesitate to contact me below.
                    </p>
                    <div className="freelancer-contact mt--40">
                        <h5 className="heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up">
                            <a href={`${process.env.PUBLIC_URL + "/"}`}>info@yourdomain.com</a>
                        </h5>
                        <div className="bk-separator--20"/>
                        <h5 className="heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up">
                            <a href={`${process.env.PUBLIC_URL + "/"}`}>(+68) 120034509</a>
                        </h5>
                        <div className="view-more-btn heading-color font-600 mt--55 wow move-up">
                            <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                <span>More details</span>
                                <span className="btn-arrow"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactThree;
