import React from "react"
import IconCampaignSettings from "../icons/IconCampaignSettings"
import * as bootstrap from 'bootstrap';
import { useRef, useEffect } from "react";



const EditCampaignItem = ({editCampaignModalData, openCampaignEditModal, ratio="40px"}) => {

    const handleOnClick = (event) => {
        openCampaignEditModal(editCampaignModalData)
    }

    return <>
        <div onClick={handleOnClick} style={{borderRadius: "15px", width:ratio, height:ratio, background: "grey", top: "15px", right: "15px"}} className=" d-flex justify-content-center align-items-center position-absolute">
            <IconCampaignSettings ratio={35}/>
        </div>

        
    </>
}

export default EditCampaignItem