import { useEffect } from "react"
import { ServiceGetCampaignHistory } from "../../services/CampaignServices"
import PageHeader from "../../page_blocks/header/Header"
import PageFooter from "../../page_blocks/footer/Footer"
import { useState } from "react"
import Collection from "../../page_blocks/collection/Collection"
import HistoryItem from "./HistoryItem"

const HistoryPage = () => {

    const [historyData, setHistoryData] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            const historyData = await ServiceGetCampaignHistory()

            const historyJson = JSON.parse(historyData.data[0].history)

            const combinedHistory = historyJson.map((opening) => {
                const openingMap = new Map()

                opening.forEach((pack) => {
                    if (openingMap.has(pack.pack_name)) {
                        // Existierendes Pack gefunden → Cards zusammenführen
                        openingMap.get(pack.pack_name).cards.push(...pack.cards);
                    } else {
                        // Neues Pack anlegen
                        openingMap.set(pack.pack_name, {
                            ...pack,
                            cards: [...pack.cards]
                        });
                    }
                });

                return Array.from(openingMap.values());
            })

            setHistoryData(combinedHistory.reverse())
        }

        
        fetchData()


        return () => {
        
        }
    }, [])
    

    return <>
        <div className=" h-100 d-flex flex-column main-background p-2">
            <PageHeader />

            <div className="body">
                <div className=" w-100 h-100 d-flex flex-column">
                    <div style={{flex:1, marginTop: "0px", }} className="overflow-auto">
                        <div style={{minHeight: 0}} className="d-flex flex-column ">
                            <Collection elementsPerRow={1}>
                                {
                                    historyData.map((data, key) => <>
                                        <HistoryItem key={key} index={historyData.length - key} openingData={data} />
                                    </> )
                                }
                            </Collection>
                        </div>
                    </div>
                </div>
                
            </div>

            <PageFooter />
        </div>
    </>
}

export default HistoryPage