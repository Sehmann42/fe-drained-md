import React from "react"

import "../../../css/Footer/footer.css"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../enums/EnumsPages"

const PageFooter = () => {
    const navigate = useNavigate()

    const handleOnClickCredts = () => {
        navigate(Pages.CREDITS)
    }

    return <>
    <div className=" footer d-flex justify-content-between p-3">
        <h3 className=''>Powered by unemployed Tears ;-;</h3>
        <h3 onClick={handleOnClickCredts} className=''>Credits</h3>
    </div>
        
    </>
}

export default PageFooter