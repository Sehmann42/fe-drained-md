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

            setHistoryData(historyJson.reverse())

            console.log(historyJson)
        }

        
        fetchData()


        return () => {
        
        }
    }, [])
    

    return <>
        <div className=" h-100 d-flex flex-column main-background p-2">
            <PageHeader />

            <div className="body">

                <div className=" p-2 w-100 h-100">
                    <Collection elementsPerRow={1}>
                    {
                        historyData.map((data, key) => <>
                            <HistoryItem key={key} index={key} packName={data} />
                        </> )
                    }
                    </Collection>
                </div>
            </div>

            <PageFooter />
        </div>
    </>
}

export default HistoryPage