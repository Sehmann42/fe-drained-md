import { useEffect } from "react"
import EditCampaignItem from "./EditCampaignItem"


const CampaignItem = ({data, handleOnClickEvent}) => {

    const CampaignItemData = {
        campaignId: data.pid,
        campaignName: data.name,
        campaignPlayers: data.players ? data.players : []
    }

    return <>
    <div style={{
        height: "200px",
    }} className=" campaignItem d-flex flex-column p-3" onClick={() => handleOnClickEvent(CampaignItemData.campaignId)}>
        <h5 className=" text-center">
            {CampaignItemData.campaignName}
        </h5>
        <div>
            <br />
        </div>
        <div className=" overflow-auto d-flex flex-column" style={{maxHeight: "150px"}}>
            <b>Spieler:</b> {
            
                CampaignItemData.campaignPlayers.map((data) => {
                    return <span>{data}</span>
                })
            
            }
        </div>

        <EditCampaignItem />
    </div>
        
    </>
}

export default CampaignItem