import React,{Fragment} from 'react';

const HeaderConfigTwo = () => {

    const body = document.querySelector('body');
    const html = document.querySelector('html');

    const searchHandler = () => {
        body.classList.add('page-search-popup-opened');
        html.style.overflow = 'hidden'
    };

    const mobileMenuHandler = () => {
        body.classList.add('popup-mobile-menu-wrapper');
        html.style.overflow = 'hidden'
    };

    return (
        <Fragment>
            <div className="popup-search-wrap">
                <button className="btn-search-click" onClick={() => {
                    searchHandler()
                }}>
                    <i className="fa fa-search"/>
                </button>
            </div>

             <div className="menu-hamburger popup-mobile-click light-version d-block d-xl-none">
                <div onClick={() => {
                    mobileMenuHandler()
                }}>
                    <i/>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderConfigTwo;