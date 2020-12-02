import React from 'react';

const HeroMinimalPortfolio = () => {
    return (
        <div className="hero-minimal-portfolio-wrapper">
            <div className="pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                        <div className="bk-footer-widget">
                            <div className="bk-separator--65"/>
                            <div className="basic-dark-line"/>
                        </div>
                    </div>

                    <div className="col-lg-8 col-xl-6 offset-xl-1">
                        <div className="hero-minimal-content">
                            <h2 className="heading heading-h1 font-80">A design agency built to build modern brands.</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroMinimalPortfolio;
