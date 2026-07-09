import IconDefaultProfile from "../icons/IconDefaultProfile"

import "../../../css/FriendsList/SideFriendListItem.css"
import { useState } from "react"
import { useEffect } from "react"

const SideFriendListItem = ({data}) => {

    const SideFriendListItemData = {
        username: data.username,
        status: data.status,
        profile_pic: data.profile_pic ? data.profile_pic : import.meta.env.VITE_BASE + "/icons/other/default_profile.png"
    }

    const [statusColor, setStatusColor] = useState("red")

    useEffect(() => {
        
        const caseStatus = SideFriendListItemData.status ? SideFriendListItemData.status : "offline"

        switch(caseStatus.toLowerCase()){
            case "offline":
                setStatusColor("red")
                break;
            case "online":
                setStatusColor("green")
                break;
        }

        return () => {
            
        };
    }, []);

    return <>
        <div className=" sidefriendlistitem d-flex justify-content-between align-items-center w-100">
            <div className="">
                <IconDefaultProfile ratio="50px" file={SideFriendListItemData.profile_pic} status={SideFriendListItemData.status}/>
            </div>

            <div style={{fontSize: "1rem"}} className=" w-100 px-2 flex-column">
                <div>
                    <b>{SideFriendListItemData.username}</b>
                </div>
                <div>
                    {SideFriendListItemData.status}
                </div>
            </div>
        </div>
    </>
}

export default SideFriendListItem