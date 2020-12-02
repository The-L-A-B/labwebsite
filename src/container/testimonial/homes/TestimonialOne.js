import React from 'react';
import Wave from 'react-wavify'
import {Col, Container, Row} from "react-bootstrap";
import SectionTitleTwo from "../../../components/section-title/SectionTitleTwo";
import SliderSwiper from "../../../components/swiper";
import TestimonialItemOne from "../../../components/testimonial/TestimonialItemOne";
import testimonials from '../../../data/testimonial';

const TestimonialOne = () => {
        const settings = {
            spaceBetween: 20,
            autoplay: false,
            loop: true,
            slidesPerView: 4,
            loopedSlides: testimonials.length,
            autoplayDisableOnInteraction: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'custom',
                renderCustom: (swiper, current, total) => {
                    let a = ((100 / total) * current).toFixed(6);
                    return '<div class="progressbar"><div class="filled" style="width:' + a + '%"></div></div>'
                }
            },
            breakpoints: {
                1560: {
                    slidesPerView: 4
                },
                900: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 2
                },
                320: {
                    slidesPerView: 1
                }
            }
        }

        return (
            <div className="bk-testimonial-area section-ptb-xl bg_color--1 poss_relative pt_sm--0">
                <div className="wavify-wrapper">
                    <Wave
                        className={'wavify-item'}
                        fill='#f5f5f5'
                        paused={false}
                        options={{
                            height: 140,
                            amplitude: 80,
                            points: 4
                        }}
                    />
                </div>
                <Container className={"section-pt-xl"}>
                    <Row>
                        <Col xs={12}>
                            <SectionTitleTwo
                                center={true}
                                title={"Testimonials"}
                                heading={"Feedback from our clients."}
                            />
                        </Col>
                    </Row>
                </Container>

                <div>
                    <SliderSwiper
                        settings={settings}
                        containerClass={'testimonial-wrapper testimonial--horizontal testimonial--horizontal--active pagination-style-01 mt--80 wow move-up'}
                    >
                        {testimonials.map(testimonial => (
                            <TestimonialItemOne key={testimonial.id} data={testimonial} classes={'swiper-slide'}/>
                        ))}
                    </SliderSwiper>
                </div>
            </div>
        );
    }
;

export default TestimonialOne;
