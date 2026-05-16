import React from "react";

const BasketItem = ({data}) => {
    return <>
    <div className=" d-flex justify-content-between">
        <span>
            {data.name}
        </span>

        <span>
            {data.amount}
        </span>
    </div>
        
    </>
}

export default BasketItem