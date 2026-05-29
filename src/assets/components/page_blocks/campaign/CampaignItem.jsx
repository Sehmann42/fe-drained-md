

const CampaignItem = ({data, handleOnClickEvent}) => {

    const CampaignItemData = {
        campaignName: data.name,
        campaignPlayers: data.players
    }

    return <>
    <div style={{
        height: "200px",
    }} className=" campaignItem d-flex flex-column p-3" onClick={handleOnClickEvent}>
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