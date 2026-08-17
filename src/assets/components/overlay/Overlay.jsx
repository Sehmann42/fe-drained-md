import { useState } from "react"
import { createContext } from "react"
import OverlayUpdateStatus from "./OverlayUpdateStatus"

const Overlay = ({children}) => {

    const [updateStatus, setUpdateStatus] = useState([])
    const [cardInfo, setCardInfo] = useState([])

    const OverlayContext = createContext(null)

    return <>
        <div className="w-100 h-100" style={{
            position: "relative",
        }}>   
            <div className="w-100 h-100" style={{
                position:"absolute"
            }}>
                <OverlayContext setCardInfo={setCardInfo} setUpdateStatus={setUpdateStatus}>
                    {children}
                </OverlayContext>
            </div>

            <div style={{
                display:"none",
                position:"absolute",
                color:"black",
                background: "black",
                left: "0px",
                top: "0px"
            }}>
                Karten Info Text
            </div>

            <div style={{
                position:"absolute",
                color:"white",
                bottom:"50px",
                right:"50px",
                width:"250px",
                height:"50px",
            }}>
                <OverlayUpdateStatus />
            </div>
        </div>
        
    </>
}

export default Overlay