import { useEffect, useRef, useState } from "react"
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
import EditCampaignItemModal from "../../page_blocks/campaign/EditCampaignItemModal"
import * as bootstrap from 'bootstrap';

const CampaignSelectionPage = () => {
    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [showInvites, setShowInvites] = useState(false)

    const [campaigns, setCampaigns] = useState([])
    const [currFriends, setCurrFriends] = useState([])
    const [invites, setInvites] = useState([])

    const campaignEditModalRef = useRef(null)
    const campaignEditModalInstance = useRef(null)

    const [editModalData, setEditModalData] = useState([])

    const handleOnClickInviteItem = () => {
        setIsLoading(true)
    }

    const resolveOnClickInviteItem = (inviteId) => {

        const resolveClick = async () => {
            try{
                const data = await ServiceGetCampaignsFromUser(GetSessionToken())

                const newInvites = invites.filter((item) => item.pid != inviteId)
                
                console.log(newInvites)
                console.log(newInvites > 0)

                setCampaigns(data.data)
                setInvites(newInvites)
                setShowInvites(newInvites.length > 0)
            }catch(e){
                console.error(e)
            }finally{
                setIsLoading(false)
            }
        } 

        resolveClick()
    }

    const updateCampaignScreen = async () => {
        const getCamapigns = async () => {
            try{
                const data = await ServiceGetCampaignsFromUser(GetSessionToken())
                setCampaigns(data.data)
            }
            catch(e){
                console.error(e)
            }finally{
                setIsLoading(false)
            }
        }

        setIsLoading(true)
        getCamapigns()
    }

    const handleOnClickCampaign = (campaign_id) => {
        //Hier muss dann auch mit State gearbeitet werden
        SetCampaignToken(campaign_id)
        navigate(Pages.COLLECTION)
    }

    const createNewCampaign = (data) => {
        console.log("Hallo Campaign!")
    }

    const openCampaignEditModal = (campaignData) => {
        setEditModalData(campaignData)
        campaignEditModalInstance.current?.show()
    }

    const closeCampaignEditModal = () => {
        campaignEditModalInstance.current?.hide()
    }   

    useEffect(() => {
        if (campaignEditModalRef.current) {
            campaignEditModalInstance.current =
                new bootstrap.Modal(campaignEditModalRef.current)
        }

        return () => {
            campaignEditModalInstance.current?.dispose()
        }

    }, [campaignEditModalRef])

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                const [data, dataInvites] = await Promise.all([
                    await ServiceGetCampaignsFromUser(GetSessionToken()),
                    await ServiceGetInvitesFromUser(GetSessionToken())
                ])

                console.log(data.data)

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
    <div className=" h-100 d-flex flex-column main-background p-2">
        <PageHeader blockPageChange={true} />

        <br />

        <div className=" body">
            <div className=" h-100 d-flex main-background justify-content-between">

                <FriendsList />

                <div style={{width:"50px"}}>
                </div>
                {
                    isLoading ? (<>
                        <div className="w-100">
                            <LoadingPage />
                        </div>
                    </>
                        
                    ) : (
                        <>
                            <div className={(showInvites ? "w-70" : "w-100") + " d-flex flex-column"}>
                                <h2>Campaigns</h2>
                                <p>Wähle die Kampagne aus die du spielen möchtest.</p>

                                <Collection maxHeight="100%" elementsPerRow={showInvites ? 4 : 6}>
                                    {campaigns.map((data) => (
                                        <CampaignItem
                                            key={data.pid}
                                            handleOnClickEvent={handleOnClickCampaign}
                                            data={data}
                                            openCampaignEditModal={openCampaignEditModal}
                                        />
                                    ))}
                                    <NewCampaignItem />
                                </Collection>
                            </div>

                            {showInvites ? (
                                <div style={{ width: "50px" }} />
                            ) : (
                                <div />
                            )}

                            <div className={(showInvites ? "w-30" : "d-none") + " d-flex flex-column"}>
                                <h2>Invites</h2>

                                <Collection maxHeight="100%" elementsPerRow={1}>
                                    {invites.map((data) => (
                                        <InviteItem
                                            key={data.pid}
                                            data={data}
                                            handleOnInviteItemClick={handleOnClickInviteItem}
                                            resolveOnCLickEvent={resolveOnClickInviteItem}
                                        />
                                    ))}
                                </Collection>
                            </div>
                        </>
                    )
                }
            </div>
        </div>

        <EditCampaignItemModal ref={campaignEditModalRef} data={editModalData} closeModalMethod={closeCampaignEditModal} updateCampaigns={updateCampaignScreen} />
        
        <br />
        
        <PageFooter />
    </div>
    </>
}

export default CampaignSelectionPage