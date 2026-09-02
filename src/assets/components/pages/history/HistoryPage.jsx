import { useEffect } from "react"
import { ServiceGetCampaignHistory } from "../../services/CampaignServices"
import PageHeader from "../../page_blocks/header/Header"
import PageFooter from "../../page_blocks/footer/Footer"

const HistoryPage = () => {
    useEffect(() => {
        
        const fetchData = async () => {
            const historyData = await ServiceGetCampaignHistory()

            console.log(historyData.data[0])

            let historyJson = JSON.parse(historyData.data[0].history)

            console.log(historyJson)
        }

        
        fetchData()


        return () => {
        
        }
    }, [])
    

    return <>
        <div className=" h-100 d-flex flex-column main-background p-2">
            <PageHeader blockPageChange={true} />
            <div className="body">

            </div>
            <PageFooter />
        </div>
    </>
}

export default HistoryPage