import React from 'react';
import NavbarItem from "../navbar/NavbarItem";
import Input from "../../../input";
import {toCapitalize} from "../../../../helper/toCapitalize";
import socialIcons from '../../../../data/socials';

const PopupMenu = () => {

    const closeHamburgerMenu = () => {
        const wrapper = document.querySelector('.open-hamburger-wrapper');
        wrapper.classList.remove('is-visible');
    }

    return (
        <div className="open-hamburger-wrapper d-none d-lg-block">
            <div className="page-close light-version" onClick={() => closeHamburgerMenu()}/>
            <div className="header-default light-logo--version poss_relative">
                <div className="mainmenu-wrapper">
                    <div className="page_nav">
                        <ul className="mainmenu">
                            <NavbarItem/>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row hamburger-search">
                <form action="/">
                    <div className="input-box">
                        <Input
                            type={'search'}
                            placeholder={'Enter Search keywords...'}
                        />
                        <button><i className="fa fa-search"/></button>
                    </div>
                </form>
            </div>

            <div className="offcanvas-extra-info mt--150">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="info">
                            <div className="bk-hover mb--40">
                                <h5 className="heading heading-h5 text-white">Connect</h5>
                                <div className="bk-separator--20"/>
                                <p className="bk_pra font-16 text-white-50">2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                <p className="bk_pra font-16"><a href={`${process.env.PUBLIC_URL + '/'}`}>info@yourdomain.com</a></p>
                            </div>
                            <ul className="social-icon text-left tooltip-layout icon-size-large">
                                {socialIcons.map(icon=>(
                                    <li key={icon.id} className={icon.media}>
                                        <a href={`https://${icon.media}.com/${icon.username}`}
                                           className="link hint--bounce hint--top hint--white" aria-label={toCapitalize(icon.media)}
                                        >
                                            <i className={`fa fa-${icon.media}`}/>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright-right text-right">
                            <p className="bk_pra font-16 text-white">© {new Date().getFullYear()} Brook. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupMenu;
