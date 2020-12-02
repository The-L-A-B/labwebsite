import React from 'react';

const TestimonialItemThree = ({data}) => {
    const Rating = () => {
        return <li><i className="fa fa-star"/></li>
    };
    return (
        <div className="testimonial testimonial_style--2">
            <div className="content">
                <h4 className="heading heading-h4">{data.title + ' ' + data.id}</h4>
                <ul className="rating d-flex ">
                    {((rows, i, len) => {
                        while (i++ <= len) {
                            rows.push(<Rating key={i}/>)
                        }
                        return rows;
                    })([], 1, data.ratings)}
                </ul>
                <p className="bk_pra">{data.quote}</p>
                <div className="testimonial-info">
                    <div className="post-thumbnail">
                        <img src={require('../../assets/img/testimonial/client-1/' + data.client.photo)}
                             alt={data.client.name}/>
                    </div>
                    <div className="client-info">
                        <h6>{data.client.name}</h6>
                        <span>{data.client.designation}</span>
                    </div>
                    <div className="testimonial-quote">
                        <span className="fa fa-quote-right"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItemThree;
