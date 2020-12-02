import React from 'react';

const ServiceItemTwo = ({data}) => {
    return (
        <div className="service service--3 hover-theme-color">
            <div className="thumb">
                <a href={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={require('../../assets/img/service/service-3/' + data.thumb)} alt={data.title}/>
                </a>
            </div>
            <div className="content">
                <h3><a href={`${process.env.PUBLIC_URL + '/'}`}>{data.title}</a></h3>
                <p>{data.content}</p>
            </div>
        </div>
    );
};

export default ServiceItemTwo;
