import React from 'react';
import PropTypes from 'prop-types';

const TestimonialItemFour = ({data}) => {
    return (
        <div className="testimonial-style--3 text-center">
            <div className="quote">
                <i className="fa fa-quote-right"/>
            </div>
            <div className="content mt--40">
                <h4 className="heading heading-h4 text-white line-height-1-88">{data.quote}</h4>

                <div className="testimonial-info pt--70 pt_sm--20">
                    <div className="post-thumbnail">
                        <img src={require('../../assets/img/testimonial/client-1/' + data.client.photo)} alt={data.client.name}/>
                    </div>
                    <div className="client-info">
                        <h6>{data.client.name}</h6>
                        <span>{data.client.designation}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

TestimonialItemFour.propTypes = {
    data: PropTypes.object
};

export default TestimonialItemFour;
