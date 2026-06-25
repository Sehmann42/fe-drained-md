import { useEffect } from "react"
import EditCampaignItem from "./EditCampaignItem"


const CampaignItem = ({data, handleOnClickEvent, openCampaignEditModal}) => {

    const CampaignItemData = {
        campaignId: data.pid,
        campaignName: data.name,
        campaignPlayers: data.players ? data.players : []
    }

    return <>
    <div style={{ height: "200px" }} className=" position-relative" >
        <div className=" h-100 campaignItem d-flex flex-column p-3" onClick={() => handleOnClickEvent(CampaignItemData.campaignId)}>
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
        </div>

        <EditCampaignItem editCampaignModalData={CampaignItemData} openCampaignEditModal={openCampaignEditModal}/>

        
    </div>

    </>
}

export default CampaignItem