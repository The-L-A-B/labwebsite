import React, {useEffect} from 'react';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
import {LightgalleryItem} from 'react-lightgallery'

const GalleryItemOne = ({preview, thumb, group, masonry, className}) => {

    useEffect(() => {
        if (masonry) {
            const grid = document.querySelector('.masonry-grid');
            imagesLoaded(grid, () => {
                new Masonry(grid, {
                    itemSelector: '.masonry-item'
                });
            });
        }
    }, [preview,masonry]);

    return (
        <div className={`gallery ${masonry ? 'masonry-item col-lg-4': ''} ${className}`}>
            <LightgalleryItem group={group} src={preview}>
                <div className={`gallery-inner`}>
                    <div className="thumb">
                        <img src={thumb} alt="Gallery Images"/>
                    </div>
                    <div className="hover-overlay">
                        <div className="inner">
                            <span className="fa fa-plus"/>
                        </div>
                    </div>
                </div>
            </LightgalleryItem>
        </div>
    );
};

export default GalleryItemOne;
