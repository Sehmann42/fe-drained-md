
import { useEffect, useState } from "react"
import "../../../css/Collection/ygocard.css"

const YGOCard = ({children, cardData}) => {

    const [cardRarity, setCardRarity] = useState("")

    useEffect(() => {
        
        const rarity = cardData.rarity

        //console.log(rarity)

        if (rarity == "R"){
            setCardRarity("isR")
        }
        else if (rarity == "SR"){
            setCardRarity("isSR")
        }
        else if (rarity == "UR"){
            setCardRarity("isUR")
        }else{
            setCardRarity("")
        }

    }, [cardData]);

    return <>
        <div className={" ygocard d-flex justify-content-center " + cardRarity}>
            <img loading="lazy"
                src={cardData.image_url}
            ></img>

            <div className=" ygocard-amount">
                {cardData.amount}
            </div>

            {children}
        </div>
    </>
}

export default YGOCard