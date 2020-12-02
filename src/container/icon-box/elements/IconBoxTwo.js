import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import IconBoxItemTwo from "../../../components/icon-box/IconBoxItemTwo";
import iconBoxData from '../../../data/icon-box/IconBoxTwo.json';
import Vivus from "vivus";

const IconBoxTwo = () => {

    useEffect(() => {
        const htSvg = document.querySelectorAll('.ht-svg');
        htSvg.forEach((svgItem, index) => {
            const options = {
                type: 'oneByOne',
                duration: 150,
                file: svgItem.dataset.svg
            };

            let vivus = new Vivus(svgItem, options, () => {
                svgItem.parentElement.parentElement.addEventListener('mouseout', () => {
                    vivus.stop()
                        .reset()
                        .play(2);
                }, () => {
                    vivus.finish();
                });
            });
        });
    }, []);

    return (
        <div className="brook-icon-boxes-area bg_color--5 ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <Container>
                <Row className="mt--n30">
                    {iconBoxData.map(iconbox => (
                        <Col xs={12} md={6} lg={4} key={iconbox.id}>
                            <IconBoxItemTwo data={iconbox}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default IconBoxTwo;