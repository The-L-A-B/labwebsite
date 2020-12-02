import React from 'react';
import PageContainer from "../container/page";
import PopupSearch from "../components/popup/PopupSearch";
import PopupMobileMenu from "../components/popup/PopupMobileMenu";

const LayoutDefault = ({children, className, revealFooter}) => {
    return (
        <PageContainer className={className} revealFooter={revealFooter}>
            <PopupSearch/>
            <PopupMobileMenu/>
            {children}
        </PageContainer>
    );
};

export default LayoutDefault;