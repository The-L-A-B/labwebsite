import React from 'react';
import {Link} from "react-router-dom";

const CallToActionOne = () => {
    return (
        <div className="firefly brook-row-column-area clearfix">
            <div className="aaa creative-gradient--1 ptb--150">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action call-to-action--1">
                                <div className="content">
                                    <h6>Build a creative website in no time</h6>
                                    <h3>Ready to enjoy <span>Brook Studio ?</span></h3>
                                    <Link to={`${process.env.PUBLIC_URL + '/contact'}`}><span>Contact us</span><i className="fa fa-arrow-right"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToActionOne;
