import React from 'react';
import {Link} from "react-router-dom";

const Logo = ({logo}) => {
    return (
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                < img src={logo} alt="logo"/>
            </Link>
        </div>
    );
};

export default Logo;