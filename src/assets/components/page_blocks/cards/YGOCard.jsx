
import { useEffect } from "react"
import "../../../css/Collection/ygocard.css"

const YGOCard = ({children, cardData}) => {
    return <>
        <div className=" ygocard d-flex justify-content-center">
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