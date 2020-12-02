import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {isSticky} from '../../helper/sticky';

const HeaderContainerOne = ({children, classes, transparent, sticky, logoVersion}) => {
    useEffect(() => {
        sticky && window.addEventListener('scroll', isSticky);

        return () => {
            sticky && window.removeEventListener('scroll', isSticky);
        }
    });

    return (
        <header
            className={`br_header header-default header-fixed-width header-mega-menu clearfix header-${transparent ? 'transparent pt--15' : 'not-transparent'} ${sticky ? 'is-sticky' : 'not-sticky'} ${logoVersion}-logo--version ${classes ? classes : ' '}`}>
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <div className="header__wrapper">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default HeaderContainerOne;