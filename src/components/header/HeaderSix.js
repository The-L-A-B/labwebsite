import React from 'react';
import HeaderContainer from "../../container/header/HeaderContainerOne";
import Logo from "./elements/logo";
import HeaderConfig from "./elements/config/HeaderConfigTwo";

import logo from '../../assets/img/logo/brook.png'

const HeaderSix = () => {
    return (
        <HeaderContainer
            logoVersion={'light'}
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

export default HeaderSix;