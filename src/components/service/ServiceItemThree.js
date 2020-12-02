import React from 'react';
import PropTypes from 'prop-types';

const ServiceItemThree = ({data}) => {
    return (
        <div className="architecture-service" data-image3={`${'img/slider/type/' + data.thumb}`}>
            <div className="architecture-inner">
                <div className="icon mb--25">
                    <img src={require('../../assets/img/service/icon-box/' + data.icon)} alt={data.title}/>
                </div>
                <div className="content">
                    <h4 className="heading heading-h4 text-white">{data.title}</h4>
                    <div className="bk-separator--20"/>
                    <p className="bk_pra">{data.description}</p>
                    <div className="view-more-btn">
                        <a href={`${process.env.PUBLIC_URL + '/'}`}><span>More details</span> <span className="btn-arrow"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceItemThree.propTypes = {
    data: PropTypes.object
};

export default ServiceItemThree;
