import { useEffect, useState } from "react"
import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import Collection from "../../page_blocks/collection/Collection"
import CampaignItem from "../../page_blocks/campaign/CampaignItem"
import LoadingPage from "../../loading_blocks/LoadingPage"
import { ServiceGetCampaignsFromUser, ServiceGetInvitesFromUser} from "../../services/CampaignServices"
import { GetSessionToken } from "../../services/TokenStorage"

import "../../../css/Campaign/campaingsselector.css"
import InviteItem from "../../page_blocks/campaign/InviteItem"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../enums/EnumsPages"
import NewCampaignItem from "../../page_blocks/campaign/NewCampaignItem"


const CampaignSelectionPage = () => {
    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [showInvites, setShowInvites] = useState(false)

    const [campaigns, setCampaigns] = useState([])
    const [invites, setInvites] = useState([])

    const handleOnClickCampaign = (data) => {
        //Hier muss dann auch mit State gearbeitet werden
        navigate(Pages.COLLECTION)
    }

    const createNewCampaign = (data) => {
        console.log("Hallo Campaign!")
    }

    useEffect(() => {
        
        const fetchData = async () => {

            const data = await ServiceGetCampaignsFromUser(GetSessionToken())
            //console.log(data)

            const dataInvites = await ServiceGetInvitesFromUser(GetSessionToken())

            setCampaigns(data.campaigns)
            setInvites(dataInvites.invites)
            setShowInvites(dataInvites.invites.length > 0)
        }
 
        fetchData()
        setIsLoading(false)

        return () => {
            
        };
    }, []);

    return <>
    <div className=" h-100 d-flex flex-column main-background">
        <PageHeader blockPageChange={true} />

        {isLoading ? <LoadingPage /> : 
            <div style={{maxHeight: "81vh"}} className=" h-100 d-flex main-background p-2">
                
                <div className={showInvites ? "w-70" : "w-100"}>
                    <h2>Campaigns</h2>
                    <Collection maxHeight="72vh" elementsPerRow={showInvites ? 4 : 6}>
                        {
                            campaigns.map((data) => { return <CampaignItem handleOnClickEvent={handleOnClickCampaign} data={data} /> })
                        }
                        <NewCampaignItem createNewCampaign={createNewCampaign} />
                    </Collection>
                </div>

                <div className={showInvites ? "w-30" : "d-none"}>
                    <h2>Invites</h2>
                    <Collection maxHeight="72vh" elementsPerRow={1}>
                        {
                            invites.map((data) => { return <InviteItem data={data} /> })
                        }
                    </Collection>
                </div>
            </div>
        }

        <PageFooter />
    </div>
    </>
}

export default CampaignSelectionPage