
import api from "../axios/Api"

const enviroment = import.meta.env.MODE

const CampaignUrls = {
    CREATE: "/campaign/create",
    GET: "/campaign/get"
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

/*

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
]

*/

const dummyDataInvites = []

const dummyDataFriendsList = [
    "Pfanne", "Kev"
]

export async function ServiceCreateCampaign(campaignName, session) {
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

    console.log(import.meta.env)

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
        
        if (enviroment == "development"){
            return {success: true, invites: dummyDataInvites}
        }

    }catch(e){
        console.log(e)
    }
}

export async function ServiceGetFriendsListFromUser(session) {
    try{
        if (enviroment == "development"){
            return {success: true, friends: dummyDataFriendsList}
        }


    }catch(e){
        console.error(e)
    }
}