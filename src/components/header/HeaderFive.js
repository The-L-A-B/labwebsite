import React from 'react';
import HeaderContainer from "../../container/header/HeaderContainerOne";
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderConfig from "./elements/config/HeaderConfigOne";

import logo from '../../assets/img/logo/labLogo.png'

const HeaderFive = () => {
    return (
        <HeaderContainer
            logoVersion={'black'}
            transparent={false}
            sticky={true}
            classes="header-fixed-150"
        >
            <div className="header-left flex-20">
                <Logo logo={logo}/>
            </div>

            <div className="header-flex-right flex-80">
                <Navbar/>
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderFive;