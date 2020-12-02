import React from 'react';
import Input from "../../../components/input";

const SearchBox = () => {
    return (
        <form className="inner" action="/">
            <div className="search-box">
                <Input
                    type="text"
                    placeholder="Enter search keyword…"
                    required={true}
                />
                <button><span className="fa fa-search"/></button>
            </div>
        </form>
    );
};

export default SearchBox;