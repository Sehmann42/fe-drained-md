import api from "../axios/Api";

const BackendUrls = {
    GETALLCARDSFROMCOLLECTION: "/collection/"
}

const Dummydata = [
        {
            name: "Sangan",
            ygoprodeckId: 26202165
        },
        {
            name: "Maiden of the Aqua",
            ygoprodeckId: 17214465
        },
        {
            name: "High Priestess of Prophecy",
            ygoprodeckId: 86585274
        },
        {
            name: "Isolde, Belle of the Underworld",
            ygoprodeckId: 22657402
        },
        {
            name: "Sangan",
            ygoprodeckId: 26202165
        },
        {
            name: "Maiden of the Aqua",
            ygoprodeckId: 17214465
        },
        {
            name: "High Priestess of Prophecy",
            ygoprodeckId: 86585274
        },
        {
            name: "Isolde, Belle of the Underworld",
            ygoprodeckId: 22657402
        },
        {
            name: "Sangan",
            ygoprodeckId: 26202165
        },
        {
            name: "Maiden of the Aqua",
            ygoprodeckId: 17214465
        },
        {
            name: "High Priestess of Prophecy",
            ygoprodeckId: 86585274
        },
        {
            name: "Isolde, Belle of the Underworld",
            ygoprodeckId: 22657402
        },
    ]

export const GetAllCardsFromCollection = (session) => {
    try{
        //Dev Mode:
        
        if (import.meta.env.MODE == "development") {
            return { success: true, data: Dummydata }
        }

        response = api.get(BackendUrls.GETALLCARDSFROMCOLLECTION, {session})

        return { success: true, data: response.data }
    } catch(e) {
        return { success: false, error: e }
    }
}