
import IconAddCard from "../../page_blocks/icons/IconAddCard"

const NewCampaignItem = ({handleOnClickNewCampaign}) => {

    return <>
        <div style={{
            height: "200px",
        }} className=" campaignItem d-flex justify-content-center align-items-center">
            <div>
                <div className=" d-flex align-items-center justify-content-center">
                    <IconAddCard />
                </div>
                <div>
                    <b>New Campaign</b>
                </div>
            </div>
        </div>
    </>
}

export default NewCampaignItem