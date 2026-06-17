import { useEffect, useState } from "react"
import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import Collection from "../../page_blocks/collection/Collection"
import CampaignItem from "../../page_blocks/campaign/CampaignItem"
import LoadingPage from "../../loading_blocks/LoadingPage"
import { ServiceGetCampaignsFromUser, ServiceGetInvitesFromUser} from "../../services/CampaignServices"
import { GetSessionToken, SetCampaignToken } from "../../services/TokenStorage"

import "../../../css/Campaign/campaingsselector.css"
import InviteItem from "../../page_blocks/campaign/InviteItem"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../enums/EnumsPages"
import NewCampaignItem from "../../page_blocks/campaign/NewCampaignItem"
import FriendsList from "../../page_blocks/friendsList/FriendsList"


const CampaignSelectionPage = () => {
    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [showInvites, setShowInvites] = useState(false)

    const [campaigns, setCampaigns] = useState([])
    const [currFriends, setCurrFriends] = useState([])
    const [invites, setInvites] = useState([])

    const handleOnClickInviteItem = () => {
        setIsLoading(true)
    }

     const resolveOnClickInviteItem = (inviteId) => {

        const resolveClick = async () => {
            try{
                const data = await ServiceGetCampaignsFromUser(GetSessionToken())
                
                console.log(invites)

                const newInvites = invites.filter((item) => item.pid != inviteId)
                
                setCampaigns(data.data)
                setInvites(newInvites)
            }catch(e){
                console.error(e)
            }finally{
                setIsLoading(false)
            }
        } 

        resolveClick()
    }

    const handleOnClickCampaign = (campaign_id) => {
        //Hier muss dann auch mit State gearbeitet werden
        SetCampaignToken(campaign_id)
        navigate(Pages.COLLECTION)
    }

    const createNewCampaign = (data) => {
        console.log("Hallo Campaign!")
    }

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                const [data, dataInvites] = await Promise.all([
                    await ServiceGetCampaignsFromUser(GetSessionToken()),
                    await ServiceGetInvitesFromUser(GetSessionToken())
                ])

                setCampaigns(data.data)

                setInvites(dataInvites.invites)
                setShowInvites(dataInvites.invites.length > 0)
            }catch(error) {
                console.error(error)
            }finally {
                setIsLoading(false)
            }
        }
 
        fetchData()

        return () => {
            
        };
    }, []);

    return <>
    <div className=" h-100 d-flex flex-column main-background">
        <PageHeader blockPageChange={true} />

        {isLoading ? <LoadingPage /> : 
        <div className=" body">
            <div className=" h-100 d-flex main-background p-2">

                <FriendsList />

                <div className={(showInvites ? "w-70" : "w-100") + " d-flex flex-column"}>
                    <h2>Campaigns</h2>
                    <Collection maxHeight="100%" elementsPerRow={showInvites ? 4 : 6}>
                        {
                            campaigns.map((data) => { return <CampaignItem handleOnClickEvent={handleOnClickCampaign} data={data} /> })
                        }
                        <NewCampaignItem />
                    </Collection>
                </div>

                <div className={(showInvites ? "w-30" : "d-none") + " d-flex flex-column"}>
                    <h2>Invites</h2>
                    <Collection maxHeight="100%" elementsPerRow={1}>
                        {
                            invites.map((data) => { return <InviteItem key={data.pid} data={data} handleOnInviteItemClick={handleOnClickInviteItem} resolveOnCLickEvent={resolveOnClickInviteItem}/> })
                        }
                    </Collection>
                </div>
            </div>
        </div>
        }

        <PageFooter />
    </div>
    </>
}

export default CampaignSelectionPage