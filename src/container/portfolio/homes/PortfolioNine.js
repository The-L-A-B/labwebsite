import React from 'react';
import SlickSlider from "../../../components/slick";
import PortfolioItem from "../../../components/portfolio/PortfolioItemSeven";
import portfolios from '../../../data/portfolio/portfolio-two.json';

const PortfolioNine = () => {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: false,
        centerPadding: "20%",
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    }

    return (
        <div className="bk-portfolio-area bg_color--3 pt_sm--100">
            <div className="has-portfolio-wrapper">
                <SlickSlider
                    settings={settings}
                    classes="brook-element-carousel slick-arrow-center slick-arrow-triangle slick-arrow-trianglestyle-2 slick-gutter-35"
                >
                    {portfolios.slice(0, 4).map(portfolio => (
                        <PortfolioItem
                            key={portfolio.id}
                            title={portfolio.title}
                            thumb={require('../../../assets/img/portfolio/creative/' + portfolio.thumb)}
                            category={portfolio.category}
                        />
                    ))}
                </SlickSlider>
            </div>
        </div>
    );
};

export default PortfolioNine;
