import { useEffect } from "react"
import Collection from "../../page_blocks/collection/Collection"
import YGOCard from "../../page_blocks/cards/YGOCard"
import { useState } from "react"

const HistoryItem = ({index, maxHeight = "900px", openingData = []}) => {
    const [packsData, setPacksData] = useState([])

    useEffect(() => {

        setPacksData(openingData, [])

        return () => {
            
        }
    }, [])
    

    return <>
        <div style={{maxHeight:maxHeight}} className=" d-flex justify-content-center align-item-center flex-column mx-2 function-background p-3">
            <div className=" d-flex justify-content-center history-item ">
                Opening : {index}
            </div>

            <hr />

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
                        
                        <div style={{minHeight: "500px",}}>
                            <Collection elementsPerRow={8}>
                                {
                                    cardsInPack.map((data, key) => {
                                        return <>
                                            <div className=" d-flex w-100 justify-content-center">
                                                <YGOCard key={key} cardData={data} />
                                            </div>
                                        </>
                                    })
                                }
                            </Collection>
                        </div>
                        
                    </> 
                })
            }
            </Collection>
        </div>
    </>
}

export default HistoryItem