import React from 'react';
import socials from '../../data/socials';

const HeroCreativePortfolio = () => {
    return (
        <div className="hero-creative-portfolio-area">
            <div className="pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
                <div className="position-relative">
                    <div className="hero-creative-portfolio-content">
                        <div className="hero-creative-portfolio-item">
                            <h2 className="font-playfair">
                                We love finding <span className="third-color">simple solutions</span> to complex
                                challenges.
                            </h2>
                        </div>

                        <div className="hero-creative-portfolio-item item-middle">
                            <h3 className="third-color">Plan, create and grow</h3>
                            <p>Rather than wandering aimlessly through life, you should define a destination then create a path in front of you in order to move towards your goals. </p>
                        </div>
                    </div>

                    <div className="hero-social-icons">
                        {socials.slice(0, 3).map(icon => (
                            <a key={icon.id} href={`https://${icon.media}.com/${icon.username}`}>
                                <i className={`fa fa-${icon.media}`}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCreativePortfolio;
