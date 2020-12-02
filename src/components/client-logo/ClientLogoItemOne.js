import React from 'react';

const ClientLogoItemOne = ({clientLogo, slideClass}) => {
    return (
        <div className={`brand ${slideClass && slideClass}`}>
            <a href={process.env.PUBLIC_URL + "/"}>
                <img src={require('../../assets/img/testimonial/client-2/' + clientLogo)} alt="Client Logo"/>
            </a>
        </div>
    );
};

export default ClientLogoItemOne;