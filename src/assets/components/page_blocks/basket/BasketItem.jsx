import React from "react";
import { useEffect } from "react";

const BasketItem = ({data, addAmount, removeAmount, removeItem}) => {

    return <>
    <div className=" d-flex px-2">
        <img height={"100px"} width={"75px"} src={data.image_url}/>

        <div style={{width:"50px"}} />

        <div className=" d-flex justify-content-between w-100 align-items-center">
            <div className=" d-flex flex-column justify-content-around h-100">
                <span>
                    {data.name}
                </span> 

                <div style={{width:"100px"}} className=" d-flex justify-content-between">
                    <div>
                        -
                    </div>

                    <div>
                        {data.amount}
                    </div>

                    <div>
                        +
                    </div>
                </div>
            </div>

            <div>
                Remove Item
            </div>
        </div>
        
        
    </div>
    <hr/>
    </>
}

export default BasketItem