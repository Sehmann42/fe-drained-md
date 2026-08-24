import { useEffect } from "react"
import "../../css/Overlay/cardPreviewDialog.css"

const RARITY_LABELS = {
    R: "Rare",
    SR: "Super Rare",
    UR: "Ultra Rare",
}

const DIALOG_WIDTH = 300
const DIALOG_MAX_HEIGHT = 480
const DIALOG_MARGIN = 16

const CardPreviewDialog = ({cardData, anchorRect}) => {

    if (!cardData || !anchorRect) return null

    useEffect(() => {
      console.log(cardData)
    
      console.log(cardData.race &&
                    <div className="card-preview-dialog-row">
                        <span>Art</span>
                        <span>{cardData.race}</span>
                    </div>)
    }, [])
    

    const spaceRight = window.innerWidth - anchorRect.right
    const openToLeft = spaceRight < DIALOG_WIDTH + DIALOG_MARGIN * 2

    const left = openToLeft
        ? Math.max(DIALOG_MARGIN, anchorRect.left - DIALOG_WIDTH - DIALOG_MARGIN)
        : Math.min(window.innerWidth - DIALOG_WIDTH - DIALOG_MARGIN, anchorRect.right + DIALOG_MARGIN)

    const top = Math.min(
        Math.max(DIALOG_MARGIN, anchorRect.top),
        Math.max(DIALOG_MARGIN, window.innerHeight - DIALOG_MAX_HEIGHT - DIALOG_MARGIN)
    )

    const rarityLabel = cardData.rarity ? (RARITY_LABELS[cardData.rarity] ?? cardData.rarity) : null

    return <>
        <div
            className="card-preview-dialog"
            style={{
                left: `${left}px`,
                top: `${top}px`,
                width: `${DIALOG_WIDTH}px`,
                maxHeight: `${DIALOG_MAX_HEIGHT}px`
            }}
        >
            <img className="card-preview-dialog-image" src={cardData.image_url} alt={cardData.name} />

            <div className="card-preview-dialog-info">
                <div className="card-preview-dialog-name">{cardData.name}</div>

                {rarityLabel &&
                    <div className={"card-preview-dialog-rarity " + (cardData.rarity ? "is" + cardData.rarity : "")}>
                        {rarityLabel}
                    </div>
                }

                <div className="card-preview-dialog-row">
                    <span>Im Besitz</span>
                    <span>{cardData.amount}x</span>
                </div>

                {cardData.type &&
                    <div className="card-preview-dialog-row">
                        <span>Typ</span>
                        <span>{cardData.type}</span>
                    </div>
                }

                {cardData.race &&
                    <div className="card-preview-dialog-row">
                        <span>Art</span>
                        <span>{cardData.race}</span>
                    </div>
                }

                {(cardData.atk !== undefined || cardData.def !== undefined) &&
                    <div className="card-preview-dialog-row">
                        <span>ATK / DEF</span>
                        <span>{cardData.atk ?? "?"} / {cardData.def ?? "?"}</span>
                    </div>
                }

                {cardData.level !== undefined &&
                    <div className="card-preview-dialog-row">
                        <span>Level</span>
                        <span>{cardData.level}</span>
                    </div>
                }

                {cardData.archetype &&
                    <div className="card-preview-dialog-row">
                        <span>Archetype</span>
                        <span>{cardData.archetype}</span>
                    </div>
                }

                {cardData.id !== undefined &&
                    <div className="card-preview-dialog-row">
                        <span>ID</span>
                        <span>{cardData.id}</span>
                    </div>
                }

                {cardData.desc &&
                    <div className="card-preview-dialog-desc">
                        {cardData.desc}
                    </div>
                }
            </div>
        </div>
    </>
}

export default CardPreviewDialog
