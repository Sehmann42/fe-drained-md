
import "../../../css/Collection/ygocard.css"

const YGOCard = (ygocarddata) => {
    return <>
        <div className=" ygocard d-flex">
            <img
            src="https://images.ygoprodeck.com/images/cards/26202165.jpg"
            ></img>

            <div className=" ygocard-amount">
                5
            </div>
        </div>
    </>
}

export default YGOCard