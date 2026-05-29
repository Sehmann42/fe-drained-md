import { useEffect, useState } from "react"
import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import Collection from "../../page_blocks/collection/Collection"
import CampaignItem from "../../page_blocks/campaign/CampaignItem"
import LoadingPage from "../../loading_blocks/LoadingPage"
import { ServiceGetCampaignsFromUser } from "../../services/CampaignServices"
import { GetSessionToken } from "../../services/TokenStorage"

import "../../../css/Campaign/campaingsselector.css"


const CampaignSelectionPage = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [showInvites, setShowInvites] = useState(false)

    const [campaigns, setCampaigns] = useState([])
    const [invites, setInvites] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {

            const data = await ServiceGetCampaignsFromUser(GetSessionToken())
            console.log(data)

            setCampaigns(data.campaigns)
            setInvites(data.invites)
            setShowInvites(data.invites.length > 0)
        }
 
        fetchData()
        setIsLoading(false)

        return () => {
            
        };
    }, []);

    return <>
    <div className=" h-100 d-flex flex-column main-background">
        <PageHeader />

        {isLoading ? <LoadingPage /> : 
            <div style={{maxHeight: "81vh"}} className=" h-100 d-flex main-background">
                
                <div className={showInvites ? "w-70" : "w-100"}>
                    <Collection elementsPerRow={showInvites ? 4 : 6}>
                        {
                            campaigns.map((data) => { return <CampaignItem data={data} /> })
                        }
                        <div style={{
                            height: "200px",
                        }} className=" campaignItem">
                            New Campaign
                        </div>
                    </Collection>
                </div>

                <div className={showInvites ? "w-30" : "d-none"}>
                    hä?
                </div>
            </div>
        }

        <PageFooter />
    </div>
    </>
}

export default CampaignSelectionPage