import React from 'react';
import HeaderContainer from "../../container/header/HeaderContainerOne";
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderConfig from "./elements/config/HeaderConfigOne";

import logo from '../../assets/img/logo/labLogo.png'

const HeaderTwo = () => {
    return (
        <HeaderContainer
            logoVersion={'dark'}
            transparent={false}
            sticky={true}
            classes="position-from--top"
        >
            <div className="header-left">
                <Logo logo={logo}/>
            </div>

            <Navbar/>

            <div className="header-right flex-20">
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderTwo;