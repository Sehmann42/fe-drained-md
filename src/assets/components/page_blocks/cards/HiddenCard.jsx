import React, { useEffect, useState } from "react";
import YGOCard from "./YGOCard";

import "../../../../assets/css/Packsim/hiddencard.css"

const HiddenCard = ({cardData}) => {

    const [isHidden, setIsHidden] = useState(true)
    const [fadeOut, setFadeOut] = useState(true)

    const [cardRarity, setCardRarity] = useState("")

    const handleOnClick = (event) => {
        setFadeOut(false)
        cardData.flipCard(cardData.data)
        setTimeout(() => {
            setIsHidden(false)
        }, 200)
    }

    useEffect(() => {

        if (cardData.data.rarity == "SR"){
            setCardRarity("isSR")
        }
        if (cardData.data.rarity == "UR"){
            setCardRarity("isUR")
        }

        return () => {
            
        };
    }, []);

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
            cardData.flipCard(cardData.data)
            handleOnClick()
        }

        return () => {
            
        };
    }, [cardData.openPack]);

    return <>
        {isHidden ? 
            <div draggable="false" onClick={handleOnClick} className={ ((fadeOut) ? 'hidden' : 'show') + " hiddencard " + cardRarity}>
                <img draggable="false" src="https://images.ygoprodeck.com/images/cards/back_high.jpg"></img>
            </div>
            :
            <div draggable="false" onClick={handleOnClick} className={"fadein hiddencard " + cardRarity}>
                <YGOCard cardData={{name:cardData.name, ygoprodeckId:cardData.ygoprodeckId}} />
            </div>
        }
    </>
}

export default HiddenCard