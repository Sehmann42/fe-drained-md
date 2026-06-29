import { useEffect } from "react"
import EditCampaignItem from "./EditCampaignItem"


const CampaignItem = ({data, handleOnClickEvent, openCampaignEditModal}) => {

    const CampaignItemData = {
        campaignId: data.pid,
        campaignName: data.name,
        campaignPlayers: data.players ? data.players : []
    }

    return <>
    <div style={{ height: "200px" }} className=" card position-relative function-background" style={{width: "17rem;"}}>
        <img onClick={() => handleOnClickEvent(CampaignItemData.campaignId)} style={{ height: "150px" }} className="card-img-top" src={import.meta.env.VITE_BASE + "/icons/other/campaign_default_pic.png"} alt="Card image cap" /> 
        <div onClick={() => handleOnClickEvent(CampaignItemData.campaignId)} className="card-body ">
            <h5 style={{color: "white"}} className="">{CampaignItemData.campaignName}</h5>
            <div className=" overflow-auto d-flex flex-column hidden-bar" style={{maxHeight: "100px"}}>
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