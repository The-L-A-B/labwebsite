import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

const FooterSix = () => {
    return (
        <footer id="page-footer-wrapper" className="page-footer-wrapper page-footer bg_color--4 fixed-footer">
            <div className="copyright ptb--40">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <div className="copyright-left text-md-left text-center">
                                <ul className="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                                    <li><Link to={process.env.PUBLIC_URL + "/blog"}>Our blog</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/portfolio"}>Latest projects</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact us</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="copyright-right text-md-right text-center">
                                <p>© {new Date().getFullYear()} Life After Bootcamp All Rights Reserved.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default FooterSix;