import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import ComingSoonContent from "../../container/coming-soon/ComingSoon";

const ComingSoon = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Coming Soon || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <ComingSoonContent/>
            </LayoutDefault>
        </Fragment>
    );
};

export default ComingSoon;
