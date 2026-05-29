
const enviroment = import.meta.env.MODE

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
]

const dummyDataFriendsList = [
    "Pfanne", "Kev"
]

export async function ServiceGetCampaignsFromUser(session) {

    try {
        if (enviroment == "development"){
            return {success: true, campaigns: dummyDataCampaings}
        }
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