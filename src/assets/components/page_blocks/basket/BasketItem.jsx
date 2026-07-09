import React from "react";
import { useEffect } from "react";
import SVGDelete from "../icons/SVGDelete";

const BasketItem = ({data, basketRef, setBasket}) => {

    const changeAmount = (event) => {
        let basket = [...basketRef]

        const updatedBasket = basket.map(item => {
                if (item.name === data.name) {
                    return {
                        ...item,
                        amount: Number(event.target.value)
                    }
                }

                return item
            })

        setBasket(updatedBasket)

    }

    const addItem = () => {
        let basket = [...basketRef]
        const updatedBasket = basket.map(item => {
                if (item.name === data.name) {
                    return {
                        ...item,
                        amount: item.amount + 1
                    }
                }

                return item
            })

        setBasket(updatedBasket)
    }

    const removeItem = () => {
        let basket = [...basketRef]
        const updatedBasket = basket.reduce((acc, item) => {
            if (item.name === data.name) {
                if (item.amount > 1) {
                    acc.push({
                        ...item,
                        amount: item.amount - 1
                    });
                }
            } else {
                acc.push(item);
            }

            return acc;
        }, []);

        setBasket(updatedBasket);
    }

    const deleteSelf = () => {
        let basket = [...basketRef]
        const updatedBasket = basket.filter((item) => item.name != data.name)
        setBasket(updatedBasket)
    }

    return <>
    <div className=" d-flex px-2">
        <img height={"100px"} width={"75px"} src={data.image_url}/>

        <div style={{width:"50px"}} />

        <div className=" d-flex justify-content-between w-100 align-items-center">
            <div className=" d-flex flex-column justify-content-around h-100">
                <span>
                    {data.name}
                </span> 

                <div style={{width:"100px"}} className=" d-flex justify-content-between roundedCorners standardBorder p-1">
                    <div onClick={() => removeItem()} className=" w-30 d-flex justify-content-center">
                        -
                    </div>
                    
                    <div className=" w-30 d-flex justify-content-center align-items-center ">
                        <input style={{width: "stretch"}} onChange={changeAmount} value={data.amount} className="text-center rounded main-background no-border overflow-hidden" type="number" />
                    </div>

                    <div onClick={() => addItem()} className=" w-30 d-flex justify-content-center">
                        +
                    </div>
                </div>
            </div>

            <div onClick={() => deleteSelf()}>
                <SVGDelete />
            </div>
        </div>
        
        
    </div>
    <hr/>
    </>
}

export default BasketItem