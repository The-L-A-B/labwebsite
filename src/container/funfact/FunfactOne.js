import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import funfacts from '../../data/funfact/funfact-one.json'
import FunfactItem from "../../components/funfact/FunFactItemOne";

const FunFactOne = () => {
    return (
        <div className="bk-number-speaks section-ptb-xl bg_image--3">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="number-speaks">
                            <div className="content wow move-up">
                                <h3 className="theme-color">NUMBER SPEAKS</h3>
                                <h2>We always ready <br/> for a <span className="secondary-color">challenge.</span></h2>
                                <a className="bk-btn theme-btn" href={process.env.PUBLIC_URI + '/'}>Learn More</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className="mt_md--40 mt_sm--40">
                        <div className="speakers-number-wrap mt--n70">
                            {funfacts.map(funfact => (
                                <FunfactItem
                                    key={funfact.id}
                                    number={funfact.numbers}
                                    title={funfact.title}
                                    content={funfact.content}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FunFactOne;
