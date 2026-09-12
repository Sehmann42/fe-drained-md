
import { useEffect, useRef, useState } from "react"
import "../../../css/Collection/ygocard.css"
import { useOverlay } from "../../overlay/OverlayContext"

const YGOCard = ({children, cardData, picRatio = "inherit"}) => {

    const [cardRarity, setCardRarity] = useState("")
    const cardRef = useRef(null)
    const overlay = useOverlay()

    useEffect(() => {

        console.log(cardData)

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

    const handleMouseEnter = () => {
        if (!overlay || !cardRef.current) return
        overlay.showCardPreview(cardData, cardRef.current.getBoundingClientRect())
    }

    const handleMouseLeave = () => {
        overlay?.hideCardPreview()
    }

    return <>
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={" ygocard d-flex justify-content-center " + cardRarity}>
            <img style={{width:picRatio, height: picRatio}} loading="lazy"
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