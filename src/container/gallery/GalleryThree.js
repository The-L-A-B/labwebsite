import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {LightgalleryProvider} from "react-lightgallery";
import GalleryItem from "../../components/gallery/GalleryItemOne";

const GalleryThree = () => {
    return (
        <div className="brook-gallery-area bg_color--1">
            <Container fluid={true} className={'plr--100 plr_md--50 plr_sm--30'}>
                <Row>
                    <Col lg={12}>
                        <div className="gallery-wrapper gallery-grid">
                            <LightgalleryProvider>
                                {galleryContent.map(gallery=>(
                                    <GalleryItem
                                        key={gallery.id}
                                        group="aboutGallery"
                                        thumb={require('../../assets/img/gallery/gallery-1/' + gallery.thumb)}
                                        preview={require('../../assets/img/gallery/gallery-1/' + gallery.preview)}
                                        masonry={false}
                                        className={gallery.widthClass}
                                    />
                                ))}
                            </LightgalleryProvider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const galleryContent = [
    {
        id:1,
        thumb: "medium-md-1.jpg",
        preview: "medium-lg-1.jpg",
        widthClass: "grid-width-2"
    },
    {
        id:2,
        thumb: "medium-md-2.jpg",
        preview: "medium-lg-2.jpg",
        widthClass: "grid-width"
    },
    {
        id:3,
        thumb: "medium-md-3.jpg",
        preview: "medium-lg-3.jpg",
        widthClass: "grid-width"
    },
    {
        id:4,
        thumb: "medium-md-4.jpg",
        preview: "medium-lg-4.jpg",
        widthClass: "grid-width-2"
    }
]

export default GalleryThree;
