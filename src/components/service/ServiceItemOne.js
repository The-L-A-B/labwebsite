import React from 'react';
import PropTypes from 'prop-types';

const ServiceItemOne = ({data}) => {
    return (
        <div className="service service--2">
            <div className="thumb">
                <img src={require('../../assets/img/service/' + data.thumb)} alt={data.title}/>
            </div>
            <div className="content">
                <h4>{data.title}</h4>
                <p>{data.content}</p>
            </div>
        </div>
    );
};

ServiceItemOne.propTypes = {
    data: PropTypes.object
};

export default ServiceItemOne;