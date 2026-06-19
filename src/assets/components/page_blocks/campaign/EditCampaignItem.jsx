import React from "react"
import IconCampaignSettings from "../icons/IconCampaignSettings"

const EditCampaignItem = ({openModal, closeModal}) => {

    return <>
        <div style={{background: "white", bottom: "0px"}} className=" position-relative">
            <IconCampaignSettings ratio={"20px"}/>
        </div>
    </>
}

export default EditCampaignItem