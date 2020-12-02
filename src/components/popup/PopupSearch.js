import React from 'react';
import Logo from "../header/elements/logo";
import Input from "../input";
import logoBlack from '../../assets/img/logo/brook-black.png';

const PopupSearch = () => {

    const closeSearchPopup = () => {
        const body = document.querySelector('body');
        const html = document.querySelector('html');
        body.classList.remove('page-search-popup-opened');
        html.style.overflow = "auto"
    };

    return (
        <div className="brook-search-popup">
            <div className="overlay" onClick={() => {
                closeSearchPopup();
            }}/>
            <div className="inner">
                <div className="search-header">
                    <Logo logo={logoBlack}/>
                    <button className="search-close" onClick={() => {
                        closeSearchPopup();
                    }}/>
                </div>
                <div className="search-content">
                    <form action="/" method="post">
                        <label>
                            <Input type="search" placeholder="Enter search keyword" required={true}/>
                        </label>
                        <button className="search-submit"><i className="fa fa-search"/></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopupSearch;