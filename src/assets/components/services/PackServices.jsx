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

const DummydataSim = [
    {
        packName: "Master Pack",
        cards: [
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
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
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
        ],
        unlockedPacks: [

        ]
    },
    {
        packName: "Master Pack",
        cards: [
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
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
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
        ],
        unlockedPacks: [
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
    },
    {
        packName: "Master Pack",
        cards: [
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
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
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4
            },
        ],
        unlockedPacks: [
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

export const GetCardsFromSecretPacks = (session, secretPacks) => {
    try{
        const OpenSecretPackData = {
            session: session,
            secretPacks: secretPacks
        }

        //Dev Mode:
        
        if (import.meta.env.MODE == "development") {
            return { success: true, data: DummydataSim }
        }

        response = api.post(BackendUrls.OPENPACKFROMSECRETPACK, OpenSecretPackData)

        return { success: true, data: response.data }
    } catch(e) {
        return { success: false, error: e }
    }
}