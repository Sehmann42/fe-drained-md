
import api from "../axios/Api"

const enviroment = import.meta.env.MODE

const CampaignUrls = {
    CREATE: "/campaign/create",
    GET: "/campaign/get",
    UPDATE_NAME: "/campaign/rename",
    DELETE_CAMPAIGN: "/campaign/delete",
    INVITE_TO_CAMPAIGN: "/campaign/invite",
    GET_ALL_INVITES: "/campaign/get/invites",
    ACCEPT_CAMPAIGN: "/campaign/accept",
    GET_FRIENDS: "/friend/get",
    ADD_FRIEND: "/friend/add",
    REMOVE_FRIEND: "/friend/remove"
}

const dummyDataCampaings = [
    {
        name: "Master Saga",
        players: ["Sehmann","Pfanne","Kev","Sehmann","Pfanne","Kev","Sehmann","Pfanne","Kev"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Pfanne"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Test"]
    },
    {
        name: "Master Saga",
        players: ["Sehmann","Pfanne","Kev"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Pfanne"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Test"]
    },
    {
        name: "Master Saga",
        players: ["Sehmann","Pfanne","Kev"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Pfanne"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Test"]
    },
    {
        name: "Master Saga",
        players: ["Sehmann","Pfanne","Kev"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Pfanne"]
    },
    {
        name: "Master Saga Pfanne",
        players: ["Sehmann","Test"]
    },
]

const dummyDataInvites = [
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
    {
        campaign_name:"Master Sage",
        invite_by:"Pfanne"
    },
]

const dummyDataFriendsList = [
    "Pfanneeeeeeeeeeeeeeeeeeeeeee", "Kev", "Pfanneeeeeeeeeeeeeeeeeeeeeee", "Kev", "Pfanneeeeeeeeeeeeeeeeeeeeeee", "Kev"
]

export async function ServiceCreateCampaign(campaignName, session, addedFriends) {
    const CreateData = {
        campaign_name : campaignName,
        session : session
    }

    const response = await api.post(CampaignUrls.CREATE, CreateData)

    return response
}

export async function ServiceGetCampaignsFromUser(session) {

    const GetCampaignData = {
        session: session
    }

    try {
        if (enviroment == "development" && false){
            return {success: true, campaigns: dummyDataCampaings}
        }

        const response = await api.post(CampaignUrls.GET,GetCampaignData)

        return response.data
        
    }catch(e){
        console.log(e)
    }
}

export async function ServiceGetInvitesFromUser(session) {

    try {
        
        if (enviroment == "development" && false){
            return {success: true, invites: dummyDataInvites}
        }

        const GetInviteData = {
            "session" : session
        }

        const response = await api.post(CampaignUrls.GET_ALL_INVITES, GetInviteData)

        console.log("response from backend")
        console.log(response)

        return {success: true, invites: response.data.data}

    }catch(e){
        console.log(e)
    }
}

export async function ServiceAcceptInviteToCampaign(session, invite_id) {
    try{
        if (enviroment == "development"){
            return {success: true, friends: dummyDataFriendsList}
        }

        const AcceptInviteData = {
            "session" : session,
            "invite_id" : invite_id
        }
        
        const response = await api.post(CampaignUrls.ACCEPT_CAMPAIGN, AcceptInviteData)

        console.log(response)

        return response.data
    }catch(e){
        console.error(e)
    }
}

export async function ServiceDeleteCampaign(session, campaign_id) {
    try{
        if (enviroment == "development"){
            return {success: true, friends: dummyDataFriendsList}
        }

        const DeleteCampaignData = {
            "session" : session,
            "campaign_id" : campaign_id
        }
        
        const response = await api.post(CampaignUrls.DELETE_CAMPAIGN, DeleteCampaignData)

        console.log(response)

        return response.data
    }catch(e){
        console.error(e)
    }
}

export async function ServiceRenameCampaign(session, campaign_id, campaign_name) {
    try{
        if (enviroment == "development" && false){
            return {success: true, friends: dummyDataFriendsList}
        }

        const RenameData = {
            "session" : session,
            "campaign_id" : campaign_id,
            "campaign_name" : campaign_name
        }
        
        const response = await api.post(CampaignUrls.UPDATE_NAME, RenameData)

        console.log(response)

        return response.data
    }catch(e){
        console.error(e)
    }
}

