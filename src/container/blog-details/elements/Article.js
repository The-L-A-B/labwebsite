import React from 'react';
import {Col, Row} from "react-bootstrap";
import Thumbnail from "../../../components/about-us/thumbnail/AboutThumbOne";
import thumbs1 from "../../../assets/img/blog/big-img/standard-post.jpg";
import thumbs2 from "../../../assets/img/blog/big-img/standard-post-2.jpg";

const Article = () => {
    return (
        <article className="blog-post standard-post">
            <header className="header mb--40 text-center">
                <h3 className="heading heading-h3 font-32">
                    Why DIY Tools were Rejected by the  Market?
                </h3>
                <div className="post-meta mt--20">
                    <div className="post-date">Oct 21, 2020</div>
                    <div className="post-category">
                        <a href={`${process.env.PUBLIC_URl + "/"}`}>Life Style</a>
                    </div>
                </div>
            </header>

            <Thumbnail thumb={thumbs1} className="mb--60"/>

            <section className="content basic-dark2-line-1px pb--50 mb--35">
                <div className="inner">
                    <h5 className="heading heading-h5 line-height-1-95 wow move-up">
                        “With the web design  service industry a $20.1B market in the US alone, and more than 16M new websites added every month, who creates these millions of new sites? More than 70% of websites are created in a professional process by developers using pro-developers platforms. These B2B solutions offer tools for building advanced websites including custom design and CMS (Content Management Systems), such as WordPress, Joomla and Drupal.”
                    </h5>
                    <div className="desc mt--45 mb--50">
                        <p className="bk_pra wow move-up">
                            While 70% of websites are built by developers,
                            agencies, and freelancers, only 3% of websites are built by
                            small-businesses with self-serve DIY tools like Squarespace, Wix,
                            and Weebly. The DIY model has barely putting a dent in the website
                            building market, despite aggressively building out features for
                            over a decade.
                        </p>
                    </div>
                </div>

                <Thumbnail thumb={thumbs2}/>

                <div className="desc mt--45">
                    <p className="bk_pra wow move-up">
                        Why do businesses still depend on internal teams or
                        service providers, ie agencies and freelancers, to build websites for
                        them? Can’t these feature-rich self-serve platforms provide powerful,
                        easy-to-use tools businesses need to build a site themselves, without
                        needing to depend on “the web guy?” Shouldn’t building a website be as
                        easy as setting up a Facebook.
                    </p>
                </div>

                <div className="bk-quote-content">
                    <blockquote className="brook-quote move-up wow">
                        <div className="quote-text">
                            Platform companies are product organizations
                            that think in terms of roadmaps and features and sprints.
                        </div>
                    </blockquote>
                </div>

                <div className="desc mt--45">
                    <p className="bk_pra wow move-up">
                        While some websites are simple and any luddite can
                        quickly build them with existing DIY tools, many business websites are
                        extremely complex and are custom built by internal teams and / or
                        digital agencies for hundreds of thousands of dollars. Or millions.
                        And, many small businesses just don’t want to learn how to use DIY
                        tools, or don’t care to, or have time to. They’d rather focus on their
                        day to day business. Digital marketing is not their forte or interest.
                        (Source: medium.com)
                    </p>
                </div>
            </section>

            <footer className="blog-footer mb--85 wow move-up">
                <Row>
                    <Col lg={12}>
                        <div className="post-tag d-flex justify-content-center align-items-center">
                            <h6 className="heading heading-h6">TAGS:</h6>
                            <div className="blog-tag-list pl--5">
                                <a href={`${process.env.PUBLIC_URL + "/"}`}>business</a>
                                <a href={`${process.env.PUBLIC_URL + "/"}`}>format</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </footer>
        </article>
    );
};

export default Article;
