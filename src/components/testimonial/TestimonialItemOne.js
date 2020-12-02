import React from 'react';

const TestimonialItemOne = ({data, classes}) => {
    return (
        <div className={`testimonial testimonial_style--1 ${classes && classes}`}>
            <div className="content">
                <p className="bk_pra heading-font">
                    “{data.quote}”
                </p>
                <div className="testimonial-info">
                    <div className="post-thumbnail">
                        <img src={require('../../assets/img/testimonial/client-1/' + data.client.photo)} alt={data.client.name}/>
                    </div>
                    <div className="client-info">
                        <h6>{data.client.name}</h6>
                        <span>{data.client.designation}</span>
                    </div>
                </div>
                <div className="testimonial-quote">
                    <span className="fa fa-quote-right"/>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItemOne;