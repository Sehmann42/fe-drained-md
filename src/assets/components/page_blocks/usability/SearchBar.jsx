import React from "react";

import "../../../css/Usability/searchbar.css"

const SearchBar = ({children}) => {
    return <>
    <div className="searchbar w-25 p-1 d-flex justify-content-center">
        {children}
    </div>
        
    </>
}

export default SearchBar