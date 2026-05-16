
import "../../../css/Collection/secretpack.css"

const MDMasterPack = ({packData, handleClickEventPack}) => {
    const srcLink = (packData.preview) ? "https://images.ygoprodeck.com/images/sets/" + packData.preview + ".jpg" : "https://images.ygoprodeck.com/images/cards/back_high.jpg"

    const handleOnClick = (event) => {
        handleClickEventPack(packData)
    }

    return <>
        <div onClick={handleOnClick} className=" secretpack d-flex justify-content-center">
            <img
                src={srcLink}
            ></img>
        </div>
    </>
}

export default MDMasterPack
