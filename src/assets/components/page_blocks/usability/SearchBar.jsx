import React from "react";

import "../../../css/Usability/searchbar.css"

const SearchBar = ({width, searchText, handleChangeEvent}) => {
    return <>
    <div style={{ width: width}} className={"searchbar d-flex justify-content-center"}>
        <input className=" w-100" defaultValue={"Suche in deiner Kollektion"} value={searchText} onChange={handleChangeEvent} type="text" />
    </div>
        
    </>
}

export default SearchBar