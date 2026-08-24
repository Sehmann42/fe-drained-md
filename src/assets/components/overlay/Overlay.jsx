import { useState, useCallback } from "react"
import OverlayUpdateStatus from "./OverlayUpdateStatus"
import CardPreviewDialog from "./CardPreviewDialog"
import { OverlayContext } from "./OverlayContext"

const Overlay = ({children}) => {

    const [updateStatus, setUpdateStatus] = useState([])
    const [previewCard, setPreviewCard] = useState(null)
    const [previewAnchor, setPreviewAnchor] = useState(null)

    const showCardPreview = useCallback((cardData, anchorRect) => {
        setPreviewCard(cardData)
        setPreviewAnchor(anchorRect)
    }, [])

    const hideCardPreview = useCallback(() => {
        setPreviewCard(null)
        setPreviewAnchor(null)
    }, [])

    const overlayValue = {
        updateStatus,
        setUpdateStatus,
        showCardPreview,
        hideCardPreview
    }

    return <>
        <div className="w-100 h-100" style={{
            position: "relative",
        }}>
            <div className="w-100 h-100" style={{
                position:"absolute"
            }}>
                <OverlayContext.Provider value={overlayValue}>
                    {children}
                </OverlayContext.Provider>
            </div>

            {previewCard && previewAnchor &&
                <CardPreviewDialog cardData={previewCard} anchorRect={previewAnchor} />
            }

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
