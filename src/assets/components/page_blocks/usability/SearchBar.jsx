import React from "react";

import "../../../css/Usability/searchbar.css"

const SearchBar = ({children, width}) => {
    return <>
    <div className={"searchbar w-" + width + " p-1 d-flex justify-content-center"}>
        {children}
    </div>
        
    </>
}

export default SearchBar