
import { useEffect, useRef, useState } from "react"
import IconAddCard from "../../page_blocks/icons/IconAddCard"
import * as bootstrap from 'bootstrap';

import "../../../css/Usability/createcampaign.css"
import Collection from "../collection/Collection";
import { ServiceCreateCampaign, ServiceInviteUsersToCampaign } from "../../services/CampaignServices";
import {ServiceGetFriendsListFromUser} from "../../services/FriendsServices"
import { GetSessionToken, SetCampaignToken, SetCampaignType } from "../../services/TokenStorage";
import FriendsListItem from "./FriendsListItem";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../../enums/EnumsPages";
import LoadingPage from "../../loading_blocks/LoadingPage";
import ListObject from "../wrapper/ListObject";
import CampaignTypes from "../../../enums/EnemsCampaignTypes";

const NewCampaignItem = () => {

    const campaignModalRef = useRef(null)
    const campaignModalInstance = useRef(null)

    const [campaignName, setCampaignName] = useState("")
    const [friendsList, setFriendsList] = useState([])
    const [toBeInvitedFriends, setToBeInvitedFriends] = useState([])
    const [campaignType, setCampaignType] = useState(CampaignTypes.Normal)

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if (campaignModalRef.current) {
            campaignModalInstance.current =
                new bootstrap.Modal(campaignModalRef.current)
        }

        return () => {
            campaignModalInstance.current?.dispose()
        }

    }, [campaignModalRef])

    const openNewCampaignModal = () => {
        const fetchData = async () => {
            
            const friendListData = await ServiceGetFriendsListFromUser(GetSessionToken())

            setFriendsList(friendListData.friends ? friendListData.friends : [])

            setIsLoading(false)
        }

        fetchData()

        campaignModalInstance.current?.show()
        
    }

    const closeNewCampaignModal = () => {
        campaignModalInstance.current?.hide()
    }

    const createNewCampaign = () => {
        const handleRequest = async () => {
            try {
                const response = await ServiceCreateCampaign(
                    campaignName,
                    GetSessionToken(),
                    campaignType
                )

                const campaignId = response.data.campaign_id

                const userIds = toBeInvitedFriends.map((item) => item.with)

                await ServiceInviteUsersToCampaign(
                    GetSessionToken(),
                    userIds ?? [],
                    campaignId
                )

                // Nur bei erfolgreichem Ablauf
                SetCampaignToken(campaignId)
                SetCampaignType(campaignType)

                console.log(toBeInvitedFriends)

                navigate(Pages.COLLECTION)
            } catch (e) {
                console.error("Fehler beim Erstellen der Kampagne:", e)

                if (e.response) {
                    console.error("Status:", e.response.status)
                    console.error("Response:", e.response.data)
                }
            } finally {
                // Wird immer ausgeführt
                setIsLoading(false)
            }
        }

        setIsLoading(true)
        handleRequest()
    }

    const handleOnClick = (itemData) => {
        const FriendListData = {
            add: itemData.add,
            username: itemData.username,
            with: itemData.with
        }

        if(FriendListData.add){
            const newFriendsList = friendsList.filter((item) => item.username != FriendListData.username)
            setFriendsList(newFriendsList)
            let copyToBeFriends = [...toBeInvitedFriends]
            copyToBeFriends.push(FriendListData)
            setToBeInvitedFriends(copyToBeFriends)
        }else{
            const newToBeFriendsList = toBeInvitedFriends.filter((item) => item.username != FriendListData.username)
            setToBeInvitedFriends(newToBeFriendsList)
            let copyFriendsList = [...friendsList]
            copyFriendsList.push(FriendListData)
            setFriendsList(copyFriendsList)
        }
    }

    const handleOnChangeType = (event) => {
        setCampaignType(event.target.value)
    }

    return <>
        <div onClick={openNewCampaignModal} style={{
            height: "200px",
        }} className=" campaignItem d-flex justify-content-center align-items-center">
            <div>
                <div className=" d-flex align-items-center justify-content-center">
                    <IconAddCard />
                </div>
                <div>
                    <b>New Campaign</b>
                </div>
            </div>
        </div>

        <div 
            ref={campaignModalRef} 
            className="modal modal-lg fade" 
            tabindex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content main-background">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Campaign Creation</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {isLoading ? <LoadingPage /> :
                            <form>
                                <div style={{color:"white"}} class="mb-3">
                                    <label for="formCampaignCreationNameInput" class="form-label"><h3>Campaign Name</h3></label>
                                    <input style={{color:"white"}} value={campaignName} onChange={(event) => setCampaignName(event.target.value)} type="text" class="form-control form-input-element" id="formCampaignCreationNameInput" placeholder="Master Saga" />
                                </div>

                                <h3>Campaign Type</h3>

                                <div>
                                    <select onChange={handleOnChangeType} style={{color:"white"}} className=" form-select function-background ">    

                                        {
                                            Object.keys(CampaignTypes).map((data) =>{ return <option value={CampaignTypes[data]}>
                                                {data}
                                            </option>})
                                        }

                                    </select>
                                </div>
                                
                                <br/>

                                <div>
                                    <h3> Invites </h3>
                                    <div className=" d-flex justify-content-between">
                                        <div className="w-50">
                                            <h5>Deine Freunde</h5>
                                            <br />
                                            <ListObject maxHeight="20vh">
                                                {
                                                    friendsList.map((data) => {
                                                        return <FriendsListItem handleOnClick={handleOnClick} username={data.username} userId={data.with} />
                                                    })
                                                }
                                            </ListObject>
                                        </div>

                                        <div style={{margin: "0 25px"}} className="vl"/>

                                        <div className=" w-50">
                                            <h5>Hinzugefügte Freunde</h5>
                                            <br />
                                            <ListObject maxHeight="20vh">
                                                {
                                                    toBeInvitedFriends.map((data) => <FriendsListItem handleOnClick={handleOnClick} username={data.username} userId={data.with} add={false} />)
                                                }
                                            </ListObject>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            </form>
                        }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button disabled={isLoading} onClick={() => createNewCampaign()} type="button" class="btn btn-primary">Create Campaign!</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NewCampaignItem