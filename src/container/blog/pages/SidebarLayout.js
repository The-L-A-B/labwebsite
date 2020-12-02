import React from 'react';
import {Col, Row} from "react-bootstrap";
import BlogItem from "../../../components/blog/BlogItemFour";
import Sidebar from "../../sidebar";

const SidebarLayout = ({data, sidebarPosition}) => {
    return (
        <Row>
            <Col lg={8} className={`order-0 order-lg-${sidebarPosition === "right" ? 0 : 1}`}>
                <Row className="mt--n60">
                    {data.slice(0, 6).map(blog => (
                        <Col sm={6} key={blog.id}>
                            <BlogItem
                                data={blog}
                                className="mt--60 blog-theme-color"
                            />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col lg={12}>
                        <div className="brook-pagination-wrapper text-center pt--80">
                            <ul className="brook-pagination">
                                <li><button><i className="fa fa-angle-left"/></button></li>
                                <li className="active"><button>1</button></li>
                                <li><button>2</button></li>
                                <li><button>3</button></li>
                                <li><button><i className="fa fa-angle-right"/></button></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col lg={4} className={`mt_md--40 mt_sm--40 order-1 order-lg-${sidebarPosition === "right" ? 1 : 0}`}>
                <Sidebar/>
            </Col>
        </Row>
    );
};

export default SidebarLayout;
