
import { useEffect } from "react"
import "../../../css/Collection/ygocard.css"

const YGOCard = ({cardData}) => {
    return <>
        <div className=" ygocard d-flex justify-content-center">
            <img
                src={cardData.image_url}
            ></img>

            <div className=" ygocard-amount">
                {cardData.amount}
            </div>
        </div>
    </>
}

export default YGOCard