import React from "react";

import "../../../css/Usability/searchbar.css"

const SearchBar = ({children}) => {
    return <>
    <div className="searchbar">
        {children}
    </div>
        
    </>
}

export default SearchBar