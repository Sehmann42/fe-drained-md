import React from "react";

const LoadingSpinny = ({ratio = "200px"}) => {
    return <>
    <img className=" loadingSpinny" src={import.meta.env.VITE_BASE + "/icons/other/loading_spinny.jpg"} style={{
        height: ratio,
        width: ratio
    }}/>
    </>
}

export default LoadingSpinny