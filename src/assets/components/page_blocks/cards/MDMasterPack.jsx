
import { useEffect, useState } from "react"
import "../../../css/Collection/secretpack.css"
import { GetSecretPackImage } from "../../services/PackServices"

const MDMasterPack = ({packData, handleClickEventPack}) => {
    const [srcLink, setSrcLink] = useState("https://images.ygoprodeck.com/images/cards/back_high.jpg")
    const [hasWideImage, setHasWideImage] = useState(false)


    //const srcLink = (packData.preview) ? "https://images.ygoprodeck.com/images/sets/" + packData.preview + ".jpg" : "https://images.ygoprodeck.com/images/cards/back_high.jpg"

    const handleOnClick = (event) => {
        handleClickEventPack(packData)
    }

    useEffect(() => {
        
        const fetchData = async () => {
                //Deprecated
                //const response = await GetSecretPackImage(packData.pack_name)

                //console.log(packData)
                
                console.log(packData)

                const imageLink = packData.wide_image_url ? packData.wide_image_url : (packData.image_url ? packData.image_url : "https://images.ygoprodeck.com/images/cards/back_high.jpg")

                setHasWideImage(packData.wide_image_url ? true : false)
                setSrcLink(imageLink)
        }

        fetchData()

        return () => {
            
        };
    }, []);

    return <>
        <div onClick={handleOnClick} className=" secretpack w-100 position-relative justify-content-center flex-column">
            <div className={(hasWideImage ? "img-wrap" : "") + " d-flex justify-content-center"}>
                <img loading="lazy" className={(hasWideImage ? "wide" : "") + " align-self-center"}
                    src={srcLink}
                />
            </div>  

            <span style={{top:"5px",left:"10px"}} className=" position-absolute align-self-center">
                {packData.pack_name}
            </span>
        </div>
    </>
}

export default MDMasterPack
