import { useEffect } from "react"
import IconAddCard from "../icons/IconAddCard"
import IconRemoveCard from "../icons/IconRemoveCard"

import "../../../css/Campaign/friendsListItem.css"

const FriendsListItem = ({friendName, handleOnClick , add = true}) => {

    return <>
        <div className=" friends-list-item w-100 d-flex justify-content-between">
            <div>
                {friendName}
            </div>

            <div onClick={handleOnClick}>
                {
                    add ? <IconAddCard /> : <IconRemoveCard />
                }
            </div>
        </div>
    </>
}

export default FriendsListItem