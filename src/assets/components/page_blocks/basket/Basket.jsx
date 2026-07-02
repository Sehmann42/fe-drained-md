import React from "react";

import "../../../../assets/css/Basket/basket.css"

const Basket = ({children,goToPackSim, maxHeight = "95%"}) => {

    const handleOnClick = (event) => {
        goToPackSim()
    }

    return <>
        <div className="h-100">
            <div style={{maxHeight:maxHeight}}>
                <div className=" h-100 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    </>
}

export default Basket