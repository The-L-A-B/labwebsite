 import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import SectionTitleThree from "../../../components/section-title/SectionTitleThree";
import SliderSwiper from "../../../components/swiper";
import portfolios from "../../../data/portfolio/portfolio-one.json";
import PortfolioItem from "../../../components/portfolio/PortfolioItemTwo";

const PortfolioTwo = () => {
    const settings = {
        slidesPerView: "auto",
        spaceBetween: 30,
        autoplay: false,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: (swiper, current, total) => {
                let a = ((100 / total) * current).toFixed(6);
                let n = current.toString();
                let s = total.toString();
                return `<div class="fraction"><span class="current">${n = n.padStart(2, '0')}</span><span class="separator"> / </span><span class="total">${(s = s.padStart(2, "0"))}</span></div><div class="progressbar"><div class="filled" data-width="${a}" style="width: ${a}%"></div></div>`;
            }
        }
    }

    return (
        <div className="bk-portfolio-area creative-portfolio section-pb-100">
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitleThree
                            title={"Featured <span class='theme-creative'>Projects</span>"}
                            btnText={"View all projects"}
                            btnLink={"/"}
                        />
                    </Col>
                </Row>
            </Container>

            <div className="portfolio-wrapper mt--40 wow move-up">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div>
                                <SliderSwiper
                                    settings={settings}
                                    containerClass={'porfolio-swip-horizontal overflow-hidden'}
                                    wrapperClass={'swiper-wrapper'}
                                >
                                    {portfolios.map(portfolio => (
                                        <PortfolioItem
                                            key={portfolio.id}
                                            title={portfolio.title}
                                            thumb={require('../../../assets/img/portfolio/portfolio-2/' + portfolio.thumb)}
                                            className={'swiper-slide'}
                                        />
                                    ))}
                                </SliderSwiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PortfolioTwo;
