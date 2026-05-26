import React from "react"

import "../../../css/Header/header.css"
import { DeleteSessionToken, GetSessionToken } from "../../services/TokenStorage"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../enums/EnumsPages"
import { LogoutUser } from "../../services/AuthenticationServices"

const PageHeader = () => {

    const navigate = useNavigate()

    const handleOnClickPackSim = (event) => {
        navigate(Pages.PACKSELECTOR)
    }

    const handleOnClickCollection = (event) => {
        navigate(Pages.COLLECTION)
    }

    const handleOnClickLogout = (event) => {
        LogoutUser(GetSessionToken())
        navigate(Pages.LOGIN)
    }

    return <>
    <div className=" d-flex justify-content-around header p-3">
        <div onClick={handleOnClickPackSim} className=" headerButton d-flex flex-column">
            <div className=" d-flex justify-content-center">
                <img className=" iconHeader" src={import.meta.env.VITE_BASE + "/icons/other/card-games.png"}></img>
            </div>
            <div className=" d-flex justify-content-center">
                pack opener
            </div>
        </div>
        <div onClick={handleOnClickCollection} className=" headerButton">
            <div className=" d-flex justify-content-center">
                <img className=" iconHeader" src={import.meta.env.VITE_BASE + "/icons/other/box.png"}></img>
            </div>
            <div className=" d-flex justify-content-center">
                collection
            </div>
        </div>  
        <div onClick={handleOnClickLogout} className=" headerButton">
            <div className=" d-flex justify-content-center">
                <img className=" iconHeader" src={import.meta.env.VITE_BASE + "/icons/other/logout.png"}></img>
            </div>
            <div className=" d-flex justify-content-center">
                logout
            </div>
        </div>
    </div>
    </>
}

export default PageHeader