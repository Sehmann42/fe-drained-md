
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

const dummyDataInvites = [{test:"wurscht"}]

export async function ServiceGetCampaignsFromUser(session) {

    try {
        
        if (enviroment == "development"){
            return {success: true, campaigns: dummyDataCampaings, invites: dummyDataInvites}
        }

    }catch(e){
        console.log(e)
    }
}