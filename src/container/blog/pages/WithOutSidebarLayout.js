import React,{Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import BlogItem from "../../../components/blog/BlogItemFour";

const WithOutSidebarLayout = ({data}) => {
    return (
        <Fragment>
            <Row className="mt--n60">
                {data.map(blog => (
                    <Col lg={4} sm={6} key={blog.id}>
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
        </Fragment>

    );
};

export default WithOutSidebarLayout;
