import React from 'react';

const ClientLogoItemTwo = ({clientLogo, className}) => {
    return (
        <div className={`client-grid ${className ? className : ''}`}>
            <div className="grid-inner">
                <div className="inner">
                    <a href={`${process.env.PUBLIC_URL + "/"}`}>
                        <img src={require('../../assets/img/client/' + clientLogo)} alt="Client Logo"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ClientLogoItemTwo;