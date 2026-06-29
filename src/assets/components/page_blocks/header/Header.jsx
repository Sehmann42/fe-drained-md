import React from "react"

import "../../../css/Header/header.css"
import { DeleteCampaignToken, DeleteSessionToken, GetSessionToken } from "../../services/TokenStorage"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../enums/EnumsPages"
import { LogoutUser } from "../../services/AuthenticationServices"
import IconGoToPackSim from "../icons/IconGoToPackSim"
import IconGoToCollection from "../icons/IconGoToCollection"
import IconLogout from "../icons/IconLogout"
import IconCampaignCollection from "../icons/IconCampaignCollection"
import IconDrainedMDSmall from "../icons/IconDrainedMDSmall"
import IconDrainedMD from "../icons/IconDrainedMD"

const PageHeader = ({blockPageChange = false}) => {

    const navigate = useNavigate()

    const handleOnClickPackSim = (event) => {
        navigate(Pages.PACKSELECTOR)
    }

    const handleOnClickCollection = (event) => {
        navigate(Pages.COLLECTION)
    }

    const handleOnClickCampaigns = (event) => {
        DeleteCampaignToken()
        navigate(Pages.CAMPAIGNS)
    }

    const handleOnClickLogout = (event) => {
        LogoutUser(GetSessionToken())
        DeleteCampaignToken()
        navigate(Pages.LOGIN)
    }

    return <>
    <div className=" d-flex function-background header p-3 justify-content-between">
        <div className=" w-20 d-flex align-items-center align-self-baseline">
            <IconDrainedMD ratio={"75px"}/>
            <h2><b>Drained MD</b></h2>
        </div>

        <div className=" w-30 d-flex justify-content-around align-self-center">
            <div onClick={handleOnClickPackSim} className={(blockPageChange ? " blocked" : "") + " headerButton d-flex flex-column"}>
                <div className=" d-flex justify-content-center">
                    <IconGoToPackSim />
                </div>
                <div className=" d-flex justify-content-center">
                    pack opener
                </div>
            </div>
    
            <div onClick={handleOnClickCollection} className={(blockPageChange ? " blocked" : "") +  " headerButton"}>
                <div className=" d-flex justify-content-center">
                    <IconGoToCollection />
                </div>
                <div className=" d-flex justify-content-center">
                    collection
                </div>
            </div>

            <div onClick={handleOnClickCampaigns} className=" headerButton">
                <div className=" d-flex justify-content-center">
                    <IconCampaignCollection />
                </div>
                <div className=" d-flex justify-content-center">
                    campaigns
                </div>
            </div>
        </div>

        <div onClick={handleOnClickLogout} className=" w-20 headerButton">
            <div className=" d-flex justify-content-center">
                <IconLogout />
            </div>
            <div className=" d-flex justify-content-center">
                logout
            </div>
        </div>
    </div>
    </>
}

export default PageHeader