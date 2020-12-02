import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

const LayoutFullPage = ({children, options}) => {
    return (
        <ReactFullpage
            {...options}
            render = {({fullpageApi})=>(
                children
            )}
        />
    );
};

export default LayoutFullPage;
