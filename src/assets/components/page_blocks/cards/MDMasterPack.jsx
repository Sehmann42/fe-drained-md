
import "../../../css/Collection/secretpack.css"

const MDMasterPack = ({packData, handleClickEventPack}) => {
    const srcLink = (packData.preview) ? "https://images.ygoprodeck.com/images/sets/" + packData.preview + ".jpg" : "https://images.ygoprodeck.com/images/cards/back_high.jpg"

    const handleOnClick = (event) => {
        handleClickEventPack(packData)
    }

    return <>
        <div onClick={handleOnClick} className=" secretpack w-100 d-flex justify-content-center flex-column">
            <img className=" align-self-center"
                src={srcLink}
            ></img>

            <span className=" align-self-center">
                {packData.packName}
            </span>
        </div>
    </>
}

export default MDMasterPack
