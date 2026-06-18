import IconDefaultProfile from "../icons/IconDefaultProfile"

import "../../../css/FriendsList/SideFriendListItem.css"

const SideFriendListItem = ({data}) => {

    const SideFriendListItemData = {
        username: data.username,
        status: data.status,
        profile_pic: data.profile_pic ? data.profile_pic : import.meta.env.VITE_BASE + "/icons/other/default_profile.png"
    }

    return <>
        <div className=" sidefriendlistitem d-flex justify-content-between align-items-center p-2 w-100">
            <div className="">
                <IconDefaultProfile ratio="50px" file={SideFriendListItemData.profile_pic} status={SideFriendListItemData.status}/>
            </div>

            <div style={{fontSize: "1.5rem"}} className=" w-100 px-2">
                <b>{SideFriendListItemData.username}</b>
            </div>
        </div>
    </>
}

export default SideFriendListItem