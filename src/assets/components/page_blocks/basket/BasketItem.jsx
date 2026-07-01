import React from "react";
import { useEffect } from "react";

const BasketItem = ({data}) => {
    useEffect(() => {
        
        console.log(data)

        return () => {
            
        };
    }, []);

    return <>
    <div className=" d-flex px-2">
        <img height={"100px"} width={"60px"} src={data.image_url}/>

        <div style={{width:"50px"}} />

        <div className=" d-flex justify-content-between w-100">
            <div className=" d-flex flex-column justify-content-around ">
                <span>
                    {data.name}
                </span>

                <div>
                    {data.amount}
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