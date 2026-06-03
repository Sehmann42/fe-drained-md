import { useEffect } from "react";
import "../../../css/Campaign/campaignItem.css"

const InviteItem = ({data}) => {

    const InviteItemData = {
        campaignName: data.campaign_name,
        inviteBy: data.invite_by,
    }

    return  <>
    <div style={{height: "100px"}} className=" campaignItem d-flex flex-column p-3 justify-content-between">
        <span>
            Campaign: {InviteItemData.campaignName}
        </span>
        <span>
            Invite: {InviteItemData.inviteBy}
        </span>
    </div>
    </>
}

export default InviteItem