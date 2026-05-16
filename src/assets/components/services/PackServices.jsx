import api from "../axios/Api";

const BackendUrls = {
    GETALLSECRETPACKS = "/secretpacks/",
    GETSECRETPACKSFROMCARD = "/secretpacks/",
    OPENPACKFROMSECRETPACK = "/openpacks/"
}

export const GetAllSecretPacks = (session) => {
    try{
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

export const GetSecretPacksFromCard = (session, secretpackId, amount) => {
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