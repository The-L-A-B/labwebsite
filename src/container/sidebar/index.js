import React from 'react';
import SidebarItem from "./elements/SidebarItem";
import SearchBox from "./elements/SearchBox";
import Instagram from "../../components/instagram";
import instagramData from "../../data/instagram";
import AdsBanner from "../../components/ads-banner";
import adsBanner from "../../assets/img/blog/big-img/banner-image.jpg";

const Sidebar = () => {
    return (
        <div className="blog-sidebar-container">
            <div className="blog-sidebar-wrapper">
                <SidebarItem
                    title="Search"
                    className="search"
                >
                    <SearchBox/>
                </SidebarItem>

                <SidebarItem
                    title="Instagram"
                    className="instagram mt--50"
                >
                    <div className="instagram-grid-wrap instagram-grid-5 inner">
                        {instagramData.map(instagram => (
                            <Instagram
                                key={instagram.id}
                                data={instagram}
                                variant="grid-style--1"
                            />
                        ))}
                    </div>
                </SidebarItem>

                <SidebarItem
                    title="Categories"
                    className="category mt--50"
                >
                    <div className="inner">
                        <ul className="category-list">
                            {data.categories.map((category, index) => (
                                <li key={index}>
                                    <a href={`${process.env.PUBLIC_URL + "/"}`}>{category}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </SidebarItem>

                <SidebarItem
                    className="banner mt--50"
                >
                    <AdsBanner
                        heading="Spot for banner"
                        adsLink="https://hasthemes.com/"
                        thumb={adsBanner}
                    />
                </SidebarItem>

                <SidebarItem
                    title="Tags"
                    className="tag mt--50"
                >
                    <div className="inner">
                        <ul className="tagcloud">
                            {data.tags.map((tag, index) => (
                                <li key={index}>
                                    <a href={`${process.env.PUBLIC_URL + "/"}`}>{tag}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </SidebarItem>
            </div>
        </div>
    );
};

const data = {
    categories: [
        "Art (1)",
        "Music (1)",
        "Travel (3)",
        "Fashion (5)",
        "Business (1)",
        "Life Style (3)",
        "Photography (5)"
    ],
    tags: [
        "architecture",
        "business",
        "format",
        "indie musician"
    ]
}

export default Sidebar;
