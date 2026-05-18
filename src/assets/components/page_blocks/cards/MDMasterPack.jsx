
import { useEffect, useState } from "react"
import "../../../css/Collection/secretpack.css"
import { GetSecretPackImage } from "../../services/PackServices"

const MDMasterPack = ({packData, handleClickEventPack}) => {
    const [srcLink, setSrcLink] = useState("https://images.ygoprodeck.com/images/cards/back_high.jpg")

    //const srcLink = (packData.preview) ? "https://images.ygoprodeck.com/images/sets/" + packData.preview + ".jpg" : "https://images.ygoprodeck.com/images/cards/back_high.jpg"

    const handleOnClick = (event) => {
        handleClickEventPack(packData)
    }

    useEffect(() => {
        
        GetSecretPackImage(packData.packName).then((data) => {
            console.log(data.data)
            setSrcLink(data.data)
        })


        return () => {
            
        };
    }, []);

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
