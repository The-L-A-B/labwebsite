import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PortfolioItem from "../../../components/portfolio/PortfolioItemThree";
import portfolios from "../../../data/portfolio/portfolio-three.json";

const PortfolioAjaxLoad = ({wide}) => {

    const [count, setCount] = useState(6);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 3);
            setLoading(false);
        }, 100);
    };

    return (
        <div className="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60">
            <Container fluid={!!wide} className={wide ? 'plr--30' : ''}>
                <Row className="mt--n30">
                    {portfolios.slice(0, count).map(portfolio => (
                        <Col sm={6} lg={4} key={portfolio.id}>
                            <PortfolioItem
                                title={portfolio.title}
                                thumb={require('../../../assets/img/portfolio/grid/' + portfolio.thumb)}
                                category={portfolio.category}
                            />
                        </Col>
                    ))}
                </Row>

                <Row className="mt--60 mt_sm--30">
                    <Col lg={12}>
                        <div className="toggle-btn text-center">
                            <button className={`loadMore ${portfolios.length <= count && 'disabled'}`}
                                    onClick={loadMore}>
                                Load More
                                <i className={`fa fa-refresh ${loading && 'fa-spin'}`}/>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioAjaxLoad;
