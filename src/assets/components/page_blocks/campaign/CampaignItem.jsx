import { useEffect } from "react"


const CampaignItem = ({data, handleOnClickEvent}) => {

    useEffect(() => {
        console.log(data)
        return () => {
            
        };
    }, []);

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
        <div className=" overflow-auto d-flex flex-column" style={{maxHeight: "250px"}}>
            <b>Spieler:</b> {
            
                CampaignItemData.campaignPlayers.map((data) => {
                    return <span>{data}</span>
                })
            
            }
        </div>
    </div>
        
    </>
}

export default CampaignItem