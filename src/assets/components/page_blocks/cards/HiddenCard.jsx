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

        if (cardData.data.rarity == "R"){
            setCardRarity("isR")
        }
        else if (cardData.data.rarity == "SR"){
            setCardRarity("isSR")
        }
        else if (cardData.data.rarity == "UR"){
            setCardRarity("isUR")
        }else{
            setCardRarity("")
        }

        return () => {
            
        };
    }, [cardData]);

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
                <YGOCard cardData={{name:cardData.name, id:cardData.data.id, image_url:cardData.data.image_url}} />
            </div>
        }
    </>
}

export default HiddenCard