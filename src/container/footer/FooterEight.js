import React from 'react';
import {Link} from "react-router-dom";
import { Row, Col} from 'react-bootstrap';

const FooterEight = () => {
    return (
        <footer id="page-footer-wrapper" className="page-footer bg_color--1">
            <div className="pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
                <div className="copyright ptb--40">
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <div className="copyright-left text-md-left text-center">
                                <ul className="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap minimal-copyright">
                                    <li><Link className="color-dark" to={process.env.PUBLIC_URL + "/"}>Our blog</Link></li>
                                    <li><Link className="color-dark" to={process.env.PUBLIC_URL + "/"}>Latest projects</Link>
                                    </li>
                                    <li><Link className="color-dark" to={process.env.PUBLIC_URL + "/"}>Contact us</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="bk-copyright-right text-md-right text-center">
                                <p className="bk_pra font-bold">© {new Date().getFullYear()} Life After Bootcamp. All Rights Reserved.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </footer>
    );
};

export default FooterEight;