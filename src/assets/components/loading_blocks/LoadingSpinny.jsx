import React from "react";

const LoadingSpinny = () => {
    return <>
    <img className=" loadingSpinny" src={import.meta.env.VITE_BASE + "/icons/other/loading_spinny.jpg"} style={{
        height: "200px",
        width: "200px"
    }}/>
    </>
}

export default LoadingSpinny