
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
        
        const fetchData = async () => {
                //Deprecated
                //const response = await GetSecretPackImage(packData.pack_name)

                //console.log(packData)

                const imageLink = packData.image_url? packData.image_url : "https://images.ygoprodeck.com/images/cards/back_high.jpg"

                setSrcLink(imageLink)
        }

        fetchData()


        return () => {
            
        };
    }, []);

    return <>
        <div onClick={handleOnClick} className=" secretpack w-100 d-flex justify-content-center flex-column">
            <img className=" align-self-center"
                src={srcLink}
            ></img>

            <span className=" align-self-center">
                {packData.pack_name}
            </span>
        </div>
    </>
}

export default MDMasterPack
