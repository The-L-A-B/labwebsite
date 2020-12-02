import React, {useEffect} from 'react';
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import portfolios from '../../../data/portfolio/portfolio-three.json';
import PortfolioItem from "../../../components/portfolio/PortfolioItemOne";

const PortfolioTen = () => {

    useEffect(() => {
        const grid = document.querySelector('.masonry-list');
        imagesLoaded(grid, () => {
            new Masonry(grid);
        });
    }, []);

    return (
        <div className="brook-portfolio-area bg_color--1 bk-masonry-wrapper">
            <div className="portfolio-grid-metro2 masonry-list mt--70">
                <div className="resizer"/>
                {portfolios.map(portfolio=>(
                    <PortfolioItem
                        key={portfolio.id}
                        title={portfolio.title}
                        thumb={require('../../../assets/img/portfolio/minimal/' + portfolio.thumb)}
                        className={`portfolio-20 ${portfolio.id === 7 ? 'grid-width-2' : 'grid-width-1'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioTen;
