import React, { useState } from "react";
import YGOCard from "./YGOCard";

import "../../../../assets/css/Packsim/hiddencard.css"

const HiddenCard = () => {

    const [isHidden, setIsHidden] = useState(true)
    const [fadeOut, setFadeOut] = useState(true)

    const handleOnClick = (event) => {
        setFadeOut(false)
        setTimeout(() => {
            setIsHidden(false)
        }, 200)
    }

    return <>
        {isHidden ? 
            <div onClick={handleOnClick} className={ ((fadeOut) ? 'hidden' : 'show') + " hiddencard"}>
                <img src="https://images.ygoprodeck.com/images/cards/back_high.jpg"></img>
            </div>
            :
            <div onClick={handleOnClick} className={"fadein hiddencard"}>
                <YGOCard cardData={{name:"dood", ygoprodeckId:26202165}} />
            </div>
        }
    </>
}

export default HiddenCard