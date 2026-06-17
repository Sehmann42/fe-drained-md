import { useEffect } from "react"
import IconAddCard from "../icons/IconAddCard"
import IconRemoveCard from "../icons/IconRemoveCard"

import "../../../css/Campaign/friendsListItem.css"

const FriendsListItem = ({username, handleOnClick, userId, add = true}) => {

    return <>
        <div className=" my-2 friends-list-item w-100 d-flex justify-content-between">
            <span className=" d-flex align-items-center">
                {username}
            </span>

            <div className=" machKlick" onClick={() => handleOnClick({add: add, username: username, with: userId})}>
                {
                    add ? <IconAddCard ratio="30px"/> : <IconRemoveCard ratio="30px" />
                }
            </div>
        </div>
    </>
}

export default FriendsListItem