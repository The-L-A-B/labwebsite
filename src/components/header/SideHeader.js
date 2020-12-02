import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo/simple-dark-logo.png'
import socials from "../../data/socials";
import {toCapitalize} from '../../helper/toCapitalize';

const SideHeader = () => {

    const body = document.querySelector('body');
    const html = document.querySelector('html');

    const searchHandler = (e) => {
        e.preventDefault();
        body.classList.add('page-search-popup-opened');
        html.style.overflow = 'hidden'
    };

    const mobileMenuHandler = () => {
        body.classList.add('popup-mobile-menu-wrapper');
        html.style.overflow = 'hidden'
    };

    const handleHamburgerMenu = () => {
        const wrapper = body.querySelector('.open-hamburger-wrapper');
        wrapper.classList.add('is-visible');
    }

    return (
        <header className="br_header-sidebar">
            <div className="side-header-inner">
                <div className="header-wrap">
                    <div className="header-top">
                        <div className="branding">
                            <Link to="/">
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                        <div id="popup-open-menu" className="popup-open-menu hamburger-trigger">
                            <div className="menu-icon" onClick={(e)=>{handleHamburgerMenu(e)}} >
                                <i/>
                            </div>
                        </div>
                    </div>
                    <div className="header-center">
                        <div className="header-social-networks">
                            <div className="inner">
                                {socials.slice(0, 3).map(social => (
                                    <a key={social.id} href={`https://${social.media}.com/${social.username}`}>
                                        <span>{toCapitalize(social.media)}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="popup-search-wrap pr_lg--30 pr_md--30 pr_sm--30">
                            <a href="/" className="btn-search-click" onClick={(e) => {
                                searchHandler(e)
                            }}>
                                <i className="fa fa-search"/>
                            </a>
                        </div>
                        <div className="menu-hamburger popup-mobile-click d-block d-xl-none gray-version d-block d-xl-none">
                            <div onClick={() => {
                                mobileMenuHandler()
                            }}>
                                <i/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SideHeader;
