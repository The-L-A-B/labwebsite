import React, {useState,Fragment} from 'react';
import SectionTitle from "../../../components/section-title/SectionTitleOne";
import BlogItem from "../../../components/blog/BlogItemFive";
import blogs from '../../../data/blog';
import ModalVideo from "react-modal-video";

const BlogFive = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        setIsOpen(true);
    }

    return (
        <div className="freelancer-blog-area">
            <SectionTitle
                heading={'My Blog.'}
                className="heading-h2 font-50 font-400 line-height-1-62"
            />

            <div className="freelancer-blog-wrapper mt--70">
                {blogs.slice(0, 2).map(blog => (
                    <Fragment key={blog.id}>
                        {blog.videoId && (
                            <ModalVideo
                                channel="youtube"
                                videoId={blog.videoId}
                                isOpen={isOpen}
                                onClose={() => setIsOpen(false)}
                            />
                        )}
                        <BlogItem data={blog} modalShow={openModal}/>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default BlogFive;
