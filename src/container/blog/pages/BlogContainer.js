import React from 'react';
import {Container} from "react-bootstrap";
import blogData from "../../../data/blog"
import SidebarLayout from "./SidebarLayout";
import WithOutSidebarLayout from "./WithOutSidebarLayout";

const BlogContainer = ({sidebar, sidebarPosition}) => {
    return (
        <div className="bk-blog-grid-area bg_color--5 section-ptb-150">
            <Container>
                {sidebar ? (
                    <SidebarLayout data={data} sidebarPosition={sidebarPosition}/>
                ) : (
                    <WithOutSidebarLayout data={data}/>
                )}
            </Container>
        </div>
    );
};

const data = [
    ...blogData,
    {
        "id": 5,
        "title": "1950s up to now Pop Music Defined",
        "thumb": "blog-05.jpg",
        "meta": {
            "postDate": "March 7, 2020",
            "category": "Photography",
            "author": "Ahammad"
        }
    },
    {
        "id": 6,
        "title": "Live Like a Bold lorem Superman",
        "thumb": "blog-06.jpg",
        "meta": {
            "postDate": "Sep 17, 2020",
            "category": "Camera",
            "author": "Yeasin"
        }
    },
    {
        "id": 7,
        "title": "Photography Careers That Pay the Bills",
        "thumb": "blog-07.jpg",
        "meta": {
            "postDate": "Oct 17, 2020",
            "category": "Interior",
            "author": "Tasnim"
        }
    },
    {
        "id": 8,
        "title": "What Motivates You to the Work?",
        "thumb": "blog-08.jpg",
        "meta": {
            "postDate": "Aug 27, 2020",
            "category": "Indoor",
            "author": "Sohel"
        }
    },
    {
        "id": 9,
        "title": "Niche Blogs for Rising Metal Bands",
        "thumb": "blog-09.jpg",
        "meta": {
            "postDate": "Jul 21, 2020",
            "category": "Playground",
            "author": "Raju Ahammad"
        }
    }
]

export default BlogContainer;
