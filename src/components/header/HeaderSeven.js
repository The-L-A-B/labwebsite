import React from 'react';
import HeaderContainer from "../../container/header/HeaderContainerOne";
import Logo from "./elements/logo";
import HeaderConfig from "./elements/config/HeaderConfigTwo";

import logo from '../../assets/img/logo/brook-black.png'

const HeaderSeven = () => {
    return (
        <HeaderContainer
            logoVersion={'dark'}
            transparent={true}
            sticky={true}
            classes="header-bar header-fixed-150"
        >
            <div className="header-left">
                <Logo logo={logo}/>
            </div>

            <div className="header-right">
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderSeven;