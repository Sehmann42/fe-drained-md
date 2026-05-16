import api from "../axios/Api";

const BackendUrls = {
    GETALLCARDSFROMCOLLECTION: "/collection/"
}

const Dummydata = [
        {
            name: "Sangan",
            ygoprodeckId: 26202165,
            amount: 4
        },
        {
            name: "Maiden of the Aqua",
            ygoprodeckId: 17214465,
            amount: 67
        },
        {
            name: "High Priestess of Prophecy",
            ygoprodeckId: 86585274,
            amount: 2
        },
        {
            name: "Isolde, Belle of the Underworld",
            ygoprodeckId: 22657402,
            amount: 1
        },
        {
            name: "Sangan",
            ygoprodeckId: 26202165,
            amount: 4
        },
        {
            name: "Maiden of the Aqua",
            ygoprodeckId: 17214465,
            amount: 67
        },
        {
            name: "High Priestess of Prophecy",
            ygoprodeckId: 86585274,
            amount: 2
        },
        {
            name: "Isolde, Belle of the Underworld",
            ygoprodeckId: 22657402,
            amount: 1
        },
        {
            name: "Sangan",
            ygoprodeckId: 26202165,
            amount: 4
        },
        {
            name: "Maiden of the Aqua",
            ygoprodeckId: 17214465,
            amount: 67
        },
        {
            name: "High Priestess of Prophecy",
            ygoprodeckId: 86585274,
            amount: 2
        },
        {
            name: "Isolde, Belle of the Underworld",
            ygoprodeckId: 22657402,
            amount: 1
        },
        {
            name: "Sangan",
            ygoprodeckId: 26202165,
            amount: 4
        },
        {
            name: "Maiden of the Aqua",
            ygoprodeckId: 17214465,
            amount: 67
        },
        {
            name: "High Priestess of Prophecy",
            ygoprodeckId: 86585274,
            amount: 2
        },
        {
            name: "Isolde, Belle of the Underworld",
            ygoprodeckId: 22657402,
            amount: 1
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