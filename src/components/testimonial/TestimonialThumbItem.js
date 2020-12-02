import React from 'react';

const TestimonialThumbItem = ({data}) => {
    return (
        <div className="client-thumb">
            <img
                src={require('../../assets/img/testimonial/client-3/' + data.client.photo)}
                alt={data.client.name}
            />
        </div>
    );
};

export default TestimonialThumbItem;