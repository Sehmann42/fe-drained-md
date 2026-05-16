import React from "react";

import "../../../../assets/css/Basket/basket.css"

const Basket = ({children}) => {


    return <>
        <div className=" basket h-100 p-3 main-background">
            <h3> Ausgewählte Packs</h3>
            
            <div>
                {children}
            </div>

            <div>
                <div>
                    Packs Öffnen
                </div>
            </div>
        </div>
    </>
}

export default Basket