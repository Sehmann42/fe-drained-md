import React from "react";

import "../../../css/Usability/searchbar.css"

const SearchBar = ({children, width}) => {
    return <>
    <div style={{ width: width}} className={"searchbar p-1 d-flex justify-content-center"}>
        {children}
    </div>
        
    </>
}

export default SearchBar