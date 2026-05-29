import React from "react"

import "../../../css/Header/header.css"
import { DeleteSessionToken, GetSessionToken } from "../../services/TokenStorage"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../enums/EnumsPages"
import { LogoutUser } from "../../services/AuthenticationServices"
import IconGoToPackSim from "../icons/IconGoToPackSim"
import IconGoToCollection from "../icons/IconGoToCollection"
import IconLogout from "../icons/IconLogout"

const PageHeader = ({blockPageChange = false}) => {

    const navigate = useNavigate()

    const handleOnClickPackSim = (event) => {
        navigate(Pages.PACKSELECTOR)
    }

    const handleOnClickCollection = (event) => {
        navigate(Pages.COLLECTION)
    }

    const handleOnClickCampaigns = (event) => {
        navigate(Pages.CAMPAIGNS)
    }

    const handleOnClickLogout = (event) => {
        LogoutUser(GetSessionToken())
        navigate(Pages.LOGIN)
    }

    return <>
    <div className=" d-flex justify-content-around header p-3">
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
                <IconGoToCollection />
            </div>
            <div className=" d-flex justify-content-center">
                campaigns
            </div>
        </div>

        <div onClick={handleOnClickLogout} className=" headerButton">
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