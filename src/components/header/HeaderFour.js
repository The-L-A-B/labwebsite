import React from 'react';
import HeaderContainer from "../../container/header/HeaderContainerThree";
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderConfig from "./elements/config/HeaderConfigOne";

import logo from '../../assets/img/logo/labLogo.png'

const HeaderFour = () => {
    return (
        <HeaderContainer>
            <div className="header-left flex-80">
                <Logo logo={logo}/>
                <Navbar className="flex-grow-0 pl--40"/>
            </div>

            <div className="header-right pr_md--30 pr_sm--30 flex-20">
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderFour;