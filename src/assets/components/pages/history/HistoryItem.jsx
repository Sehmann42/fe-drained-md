import { useEffect } from "react"
import Collection from "../../page_blocks/collection/Collection"
import YGOCard from "../../page_blocks/cards/YGOCard"
import { useState } from "react"

const HistoryItem = ({index, openingData}) => {
    const [packsData, setPacksData] = useState([])

    useEffect(() => {

        

        setPacksData(openingData, [])

        return () => {
            
        }
    }, [])
    

    return <>
        <div className=" d-flex h-100 justify-content-center align-item-center flex-column mx-2">
            <div className=" d-flex justify-content-center">
                    Opening : {index}
                </div>
                <Collection>
                {
                    packsData.map((data, key) => {
                        console.log(data)
                        const packName = data.pack_name
                        const cardsInPack = data.cards

                        return<>
                            <div>
                                <div>{packName}</div>
                            </div>
                            
                            <Collection elementsPerRow={4}>
                                {
                                    cardsInPack.map((data, key) => {
                                        return <>
                                            <YGOCard key={key} cardData={data} />
                                        </>
                                    })
                                }
                            </Collection>
                        </> 
                    })
                }
                </Collection>
        </div>
    </>
}

export default HistoryItem