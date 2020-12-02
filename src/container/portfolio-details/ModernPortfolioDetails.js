import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SlickSlider from "../../components/slick";
import ImageSlider from "../../components/image-slider";
import PopupVideo from "../../components/popup-video";
import Button from "../../components/button";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "../../assets/img/bg/bg-image-39.jpg";
import portDetailsData from "../../data/portfolio-details";
import videoThumb from "../../assets/img/portfolio/big-image/portfolio-custom-layout-05-image-01.jpg";

const ModernPortfolioDetails = () => {

    // Slider Images
    const sliderImages = [
        "flexible-small--image-1.jpg",
        "flexible-small--image-2.jpg",
        "flexible-small--image-3.jpg",
        "flexible-small--image-5.jpg"
    ];

    const NextArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-right"/>
            </button>
        );
    };

    const PrevArrow = ({className, onClick}) => {
        return (
            <button className={`slick-btn ${className}`} onClick={onClick}>
                <i className="fa fa-angle-left"/>
            </button>
        );
    };

    const settings = {
        slidesToShow: 3,
        dots: true,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                "breakpoint": 992,
                "settings": {
                    slidesToShow: 2
                }
            },
            {
                "breakpoint": 576,
                "settings": {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Fragment>
            <Breadcrumb
                title={portDetailsData.title}
                bgImg={breadcrumbBg}
            />

            <div className="brook-portfolio-details bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="portfolio-left bk-portfolio-details">
                                <div className="portfolio-main-info">
                                    <h3 className="heading heading-h3 line-height-1-42">About Project</h3>

                                    <div className="portfolio-details-list mt--60 mt_sm--30">
                                        {portDetailsData.meta.map(item => (
                                            <div className="details-list" key={item.id}>
                                                <label>{item.type}</label>
                                                <span><a href={`${process.env.PUBLIC_URL + "/"}`}>{item.text}</a></span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="portfolio-content mt_sm--60 mt_md--80">
                                <h6 className="heading heading-h6">ABOUT THE PROJECT</h6>
                                <div className="desc mt--20">
                                    <p className="bk_pra" dangerouslySetInnerHTML={{__html: portDetailsData.desc}}/>

                                    <div className="brk-btn-wrap mt--40 mt_sm--20">
                                        <Button
                                            type="link"
                                            size="sd"
                                            color="theme"
                                            btnStyle="rounded"
                                            btnText="Live Preview"
                                            btnLink="https://hasthemes.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt--100 mt_md--80 mt_sm--60">
                        <Col xs={12}>
                            <SlickSlider
                                settings={settings}
                                classes="brook-element-carousel slick-gutter-15 slick-arrow-center slick-dots-bottom"
                            >
                                {sliderImages.map((sliderImage, key) => (
                                    <ImageSlider key={key} image={sliderImage}/>
                                ))}
                            </SlickSlider>
                        </Col>
                    </Row>

                    <Row className="mt--150 mt_md--120 mt_sm--100">
                        <Col lg={12}>
                            <PopupVideo
                                isThumb={true}
                                thumb={videoThumb}
                            />
                        </Col>
                    </Row>

                    <Row className="mt--100 mt_md--80 mt_sm--60">
                        <Col lg={12}>
                            <div className="portfolio-nav-list">
                                <div className="portfolio-page prev">
                                    <div className="inner">
                                        <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                            <p>Prev</p>
                                            <h3 className="heading heading-h3">Awe-inspiring <br/> Projects</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio-page next mt_sm--30">
                                    <div className="inner">
                                        <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                            <p>Next</p>
                                            <h3 className="heading heading-h3">B-sharp High-end <br/> Audio</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default ModernPortfolioDetails;
