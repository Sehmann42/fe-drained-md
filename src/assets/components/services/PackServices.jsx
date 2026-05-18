import api from "../axios/Api";
import { GetSessionToken } from "./TokenStorage";

const BackendUrls = {
    GETALLSECRETPACKS : "/secretpacks/",
    GETALLSECRETPACKSIMAGE : "/secretpacksimage/",
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
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "N",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "N",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of seeeeeh",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of seeeeeh",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of Pfanne",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "SR",
                packs: [
                    {
                        pack_name: "Legends of Kev",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
        ],
    },
    {
        packName: "Master Pack",
        cards: [
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "N",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "N",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of Pfanne",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of Old",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of Old",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "SR",
                packs: [
                    {
                        pack_name: "Legends of Old",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
        ],
    },
    {
        packName: "Master Pack",
        cards: [
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "N",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Sangan",
                ygoprodeckId: 26202165,
                amount: 4,
                rarity: "N",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of Old",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of Old",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Legends of Old",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
            {
                name: "Maiden of the Aqua",
                ygoprodeckId: 17214465,
                amount: 67,
                rarity: "SR",
                packs: [
                    {
                        pack_name: "Legends of Old",
                        pack_type: "Secret Pack"
                    },
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
        ],
    },
]

const DummyDataMasterPackImage = {
    "Blessings of Nature":
    {
        image_url: "https://ms.yugipedia.com//c/c5/Blessings_of_Nature-Pack-Master_Duel.png"
    },
    "Master Pack" : {
        image_url: "https://images.ygoprodeck.com/images/sets/Master_Pack.jpg"
    }
}

export const GetSecretPackImage = async (packName) => {
    try{
        //Dev Mode:

        console.log(packName)
        
        if (import.meta.env.MODE == "development") {
            return { success: true, data: 
                (DummyDataMasterPackImage[packName]?.image_url) ?
                 DummyDataMasterPackImage[packName]?.image_url :
                 DummyDataMasterPackImage["Blessings of Nature"].image_url }
        }

        const GetSecretPackImageData = {
            session: GetSessionToken(),
            packName: packName
        }

        response = api.get(BackendUrls.GETALLSECRETPACKSIMAGE, GetSecretPackImageData)

        return { success: true, data: response.data }
    } catch(e) {
        return { success: false, error: e }
    }
}

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