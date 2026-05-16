import React, { useEffect, useState } from "react";
import YGOCard from "./YGOCard";

import "../../../../assets/css/Packsim/hiddencard.css"

const HiddenCard = ({cardData}) => {

    const [isHidden, setIsHidden] = useState(true)
    const [fadeOut, setFadeOut] = useState(true)

    const handleOnClick = (event) => {
        setFadeOut(false)
        setTimeout(() => {
            setIsHidden(false)
        }, 200)
    }

    useEffect(() => {
        setIsHidden(true)
        setFadeOut(true)

        return () => {
            setIsHidden(true)
            setFadeOut(true)
        };
    }, [cardData.currPack]);

    useEffect(() => {
        
        if(cardData.openPack){
            handleOnClick()
        }

        return () => {
            
        };
    }, [cardData.openPack]);

    return <>
        {isHidden ? 
            <div onClick={handleOnClick} className={ ((fadeOut) ? 'hidden' : 'show') + " hiddencard"}>
                <img src="https://images.ygoprodeck.com/images/cards/back_high.jpg"></img>
            </div>
            :
            <div onClick={handleOnClick} className={"fadein hiddencard"}>
                <YGOCard cardData={{name:cardData.name, ygoprodeckId:cardData.ygoprodeckId}} />
            </div>
        }
    </>
}

export default HiddenCard