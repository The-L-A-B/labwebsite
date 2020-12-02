import React from 'react';
import NavbarItem from "./NavbarItem";

const Navbar = ({className}) => {
    return (
        <div className={`mainmenu-wrapper d-none d-lg-block ${className ? className : ''}`}>
            <nav className="page_nav">
                <ul className="mainmenu">
                    <NavbarItem/>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;