import React from 'react';
import pricingTables2 from "../../data/prcing-table/pricing-table-2.json";

const PricingTableList = () => {
    return (
        <div className="ht-pricing-list-view table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th className="pricing-header">
                        <span className="heading-h4">Available <br/> pricing plans</span>
                    </th>

                    {pricingTables2.map(priceTable => (
                        <th key={priceTable.id} className="pricing-header">
                            {priceTable.popular && <div className="feature-park">Popular Choice</div>}
                            <span className="heading-h6 theme-color">{priceTable.packageName}</span>
                            <div className="price-wrap">
                                <div className="price-wrap-inner">
                                    <span className="currency">$</span>
                                    <span className="price">{priceTable.price}</span>
                                    <span className="period">/ monthly</span>
                                </div>
                            </div>
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td className="price-list">
                        <ul>
                            <li><span>Users</span></li>
                            <li><span>File storage</span></li>
                            <li><span>Premium supports</span></li>
                            <li><span>Secure transfer</span></li>
                            <li><span>Statistics and tracking</span></li>
                            <li><span>File size limit</span></li>
                            <li><span>Mobile app</span></li>
                            <li>&nbsp;</li>
                        </ul>
                    </td>

                    {pricingTables2.map(priceTable => (
                        <td key={priceTable.id} className="price-list">
                            <ul>
                                <li><span>{priceTable.user}</span></li>
                                <li><span>{priceTable.storage}</span></li>
                                <li>
                                    <span
                                        className={`${priceTable.support ? 'item-checked' : 'text-danger'} fa fa-${priceTable.support ? 'check' : 'close'}`}
                                    />
                                </li>
                                <li>
                                     <span
                                         className={`${priceTable.transfer ? 'item-checked' : 'text-danger'} fa fa-${priceTable.transfer ? 'check' : 'close'}`}
                                     />
                                </li>
                                <li>
                                    <span
                                        className={`${priceTable.tracking ? 'item-checked' : 'text-danger'} fa fa-${priceTable.tracking ? 'check' : 'close'}`}
                                    />
                                </li>
                                <li><span>{priceTable.sizeLimit}</span></li>
                                <li>
                                    <span
                                        className={`${priceTable.mobileApp ? 'item-checked' : 'text-danger'} fa fa-${priceTable.mobileApp ? 'check' : 'close'}`}
                                    />
                                </li>
                                <li className="ft--foot">
                                    <a className="brook-btn bk-btn-dark btn-sd-size btn-rounded space-between" href="/">
                                        Sign up
                                    </a>
                                </li>
                            </ul>
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PricingTableList;
