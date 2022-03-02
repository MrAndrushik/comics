import React from "react";

const SearchInput = ({ style }) => {
    return (
        <input
            style={{ ...style }}
            type="text"
            className="search__input"
            placeholder="Search"
        />
    );
};

export default SearchInput;
