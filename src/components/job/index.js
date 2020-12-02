import React from 'react';
import Proptypes from "prop-types";

const JobItem = ({data, className}) => {
    return (
        <div className={`career ${className}`}>
            <div className="inner">
                <div className="title">
                    <h3 className="heading heading-h3 theme-color">{data.position}</h3>
                </div>

                <div className="content mt--35">
                    <h6 className="heading heading-h6">ABOUT</h6>
                    <div className="desc mt--25">
                        <p className="bk_pra">Location: {data.location}</p>
                        <div className="bk-separator--25"/>
                        <p className="bk_pra">{data.description}</p>
                    </div>
                </div>

                <div className="career-list mt--65">
                    <h6 className="heading heading-h6">REQUIREMENTS</h6>
                    <div className="bk-list--2 mt--35">
                        {data.requirements.map((requirement,index)=>(
                            <div key={index} className="list-header with-check">
                                <div className="marker dark-color"/>
                                <div className="title-wrap">
                                    <h6 className="heading heading-h6">{requirement}</h6>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="career-btn mt--60">
                        <a className="brook-btn bk-btn-dark btn-sd-size btn-rounded space-between" href={`${process.env.PUBLIC_URL + "/"}`}>
                            Apply now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

JobItem.propTypes = {
    data: Proptypes.object,
    className: Proptypes.string
};

export default JobItem;
