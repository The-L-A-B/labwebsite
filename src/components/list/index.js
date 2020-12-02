import React from 'react';

const ListItem = ({marker, text, content}) => {
    return (
        <div className={`list-header with-${marker}  ${!marker ? 'pl-0': null}`}>
            {marker ? <div className={`marker`}/> : null}
            <div className="title-wrap">
                {marker === 'default' ? (<h5 className="heading heading-h5">{text}</h5>) : (
                    <h6 className="heading heading-h5">{text}</h6>)}
                {content && <p className="bk_pra">{content}</p>}
            </div>
        </div>
    );
};

export default ListItem;
