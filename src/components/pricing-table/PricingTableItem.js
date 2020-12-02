import React from 'react';

const PricingTableItem = ({data}) => {
    return (
        <div className={`pricing-wrap ${!data.popular ? 'pt--40' : 'mt_sm--40'}`}>
            <div className={`pricing-box ${data.popular ? 'active' : ''}`}>
                <div className="header">
                    {data.popular && (
                        <div className="feature-mark">Popular Choice</div>
                    )}
                    <div className="price">
                        <h3 className="currency">$</h3>
                        <h3 className="heading heading-h3">{data.price}</h3>
                    </div>
                </div>
                <div className="content">
                    <h5 className="heading heading-h5">{data.packageName}</h5>
                    <div className="bk-list--2">
                        {data.features.map((feature, key) => (
                            <div key={key} className="list-header with-check theme">
                                <div className="marker"/>
                                <div className="title-wrap">
                                    <h6 className="heading heading-h5">{feature}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer mt--40">
                    <a className="brook-btn bk-btn-dark btn-sd-size btn-rounded"
                       href={process.env.PUBLIC_URL + '/'}
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PricingTableItem;