import api from "../axios/Api";

const BackendUrls = {
    GETALLSECRETPACKS : "/secretpacks/",
    GETSECRETPACKSFROMCARD : "/secretpacks/",
    OPENPACKFROMSECRETPACK : "/openpacks/"
}

const Dummydata = [
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
        {
            packName: "Master Pack",
            preview: "Master_Pack",
            id:1
        },
        {
            packName: "Beyond the Next Level",
            preview: "",
            id:2
        },
        {
            packName: "Aerial Superiority",
            preview: "Aerial_Superiority",
            id:3
        },
]

export const GetAllSecretPacks = (session) => {
    try{
        //Dev Mode:
        
        if (import.meta.env.MODE == "development") {
            return { success: true, data: Dummydata }
        }

        response = api.get(BackendUrls.GETALLSECRETPACKS, {session})

        return { success: true, data: response.data }
    } catch(e) {
        return { success: false, error: e }
    }
}

export const GetSecretPacksFromCard = (session, cardId) => {
    try{
        response = api.get(BackendUrls.GETSECRETPACKSFROMCARD, {session})

        return { success: true, data: response.data }
    } catch(e) {
        return { success: false, error: e }
    }
}

export const GetCardsFromSecretPack = (session, secretpackId, amount) => {
    try{
        const OpenSecretPackData = {
            session: session,
            secretpackId: secretpackId,
            amount: amount
        }

        response = api.post(BackendUrls.OPENPACKFROMSECRETPACK, OpenSecretPackData)

        return { success: true, data: response.data }
    } catch(e) {
        return { success: false, error: e }
    }
}