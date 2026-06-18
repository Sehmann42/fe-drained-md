import { useEffect } from "react";
import "../../../css/Campaign/campaignItem.css"
import { ServiceAcceptInviteToCampaign } from "../../services/CampaignServices";
import { GetSessionToken } from "../../services/TokenStorage";

const InviteItem = ({data, handleOnInviteItemClick, resolveOnCLickEvent}) => {

    const InviteItemData = {
        campaignName: data.name,
        inviteBy: data.username,
        inviteId:  data.pid
    }

    const handleOnClick = () => {
        const sendData = async () => {
            handleOnInviteItemClick()
            await ServiceAcceptInviteToCampaign(GetSessionToken(), InviteItemData.inviteId)
        }

        sendData().then(() => {
            resolveOnCLickEvent(InviteItemData.inviteId)
        })
    }

    return  <>
    <div onClick={() => handleOnClick()} style={{height: "100px"}} className=" campaignItem d-flex flex-column p-3 justify-content-between">
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