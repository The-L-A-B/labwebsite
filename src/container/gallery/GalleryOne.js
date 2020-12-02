import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import {LightgalleryProvider} from 'react-lightgallery'
import "lightgallery.js/dist/css/lightgallery.css";
import galleryContent from '../../data/gallery'
import GalleryItemOne from "../../components/gallery/GalleryItemOne";

const GalleryOne = () => {
    return (
        <div className="brook-gallery-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="gallery-wrapper gallery-grid">
                            <LightgalleryProvider>
                                {galleryContent.map(gallery=>(
                                    <GalleryItemOne
                                        key={gallery.id}
                                        group="group1"
                                        thumb={require('../../assets/img/gallery/gallery-1/' + gallery.thumb)}
                                        preview={require('../../assets/img/gallery/gallery-1/' + gallery.preview)}
                                        masonry={false}
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

export default GalleryOne;
