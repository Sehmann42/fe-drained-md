
import { useEffect } from "react"
import "../../../css/Collection/ygocard.css"

const YGOCard = ({cardData}) => {
    useEffect(() => {
        
        console.log({cardData})

        return () => {
            
        };
    }, []);

    return <>
        <div className=" ygocard d-flex justify-content-center">
            <img
                src={"https://images.ygoprodeck.com/images/cards/" + cardData.ygoprodeckId + ".jpg"}
            ></img>

            <div className=" ygocard-amount">
                5
            </div>
        </div>
    </>
}

export default YGOCard