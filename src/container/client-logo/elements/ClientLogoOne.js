import React, {Fragment, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SliderSwiper from "../../../components/swiper";
import ClientLogoItem from "../../../components/client-logo/ClientLogoItemOne";
import clientLogos from '../../../data/client-logo';

const ClientLogoOne = ({arrows, dots, wrapClasses, variant}) => {
    const [swiper, updateSwiper] = useState(null);

    const params = {
        ...dots && {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        },
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            601: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 5
            }
        }
    };

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    return (
        <div className={`bk-brand-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--60 ${wrapClasses ? wrapClasses : ""}`}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="brand-wrapper">
                            <div className={`brand__list brand-default ${variant ? variant : ""}`}>
                                <SliderSwiper settings={params} reference={updateSwiper}>
                                    {clientLogos.slice(0,6).map(logo => (
                                        <ClientLogoItem key={logo.id} clientLogo={logo.logo} slideClass="swiper-slide"/>
                                    ))}
                                </SliderSwiper>
                                {arrows && (
                                    <Fragment>
                                        <button onClick={() => { goNext() }} className="swiper-next">
                                            <i className="fa fa-angle-right"/>
                                        </button>
                                        <button onClick={() => { goPrev() }} className="swiper-prev">
                                            <i className="fa fa-angle-left"/>
                                        </button>
                                    </Fragment>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientLogoOne;