import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Error404 from "../../container/error/Error404";

const Error = () => {
    return (
        <Fragment>
            <Helmet>
                <title>404 ERROR || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>

            <LayoutDefault className="template-color-1 template-font-1">
                <Error404/>
            </LayoutDefault>
        </Fragment>
    );
};

export default Error;
