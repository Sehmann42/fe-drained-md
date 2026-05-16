import React from "react";

import "../../../../assets/css/Basket/basket.css"

const Basket = ({children,goToPackSim}) => {

    const handleOnClick = (event) => {
        goToPackSim()
    }

    return <>
        <div className=" basket h-100 p-3 main-background">
            <h3> Ausgewählte Packs</h3>
            
            <div>
                {children}
            </div>

            <div>
                <div onClick={handleOnClick}>
                    Packs Öffnen
                </div>
            </div>
        </div>
    </>
}

export default Basket