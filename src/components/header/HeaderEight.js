import React from 'react';
import HeaderContainer from "../../container/header/HeaderContainerOne";
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderConfig from "./elements/config/HeaderConfigTwo";

import logo from '../../assets/img/logo/brook-black.png'

const HeaderEight = () => {
    return (
        <HeaderContainer
            logoVersion={'black'}
            transparent={false}
            sticky={true}
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

export default HeaderEight;