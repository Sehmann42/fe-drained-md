import api from "../axios/Api";
import { GetSessionToken } from "./TokenStorage";

const BackendUrls = {
    GETALLSECRETPACKS : "/secretpacks/",
    GETSECRETPACKSIMAGE : "/secretpacksimage/",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    },

                ]
            },
        ]
    },
    {
        packName: "Master Pack",
        cards: [
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    },
                    {
                        pack_name: "Legends of Kev",
                        pack_type: "Secret Pack"
                    },
                ]
            },
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
        ]
    },
    {
        packName: "Master Pack",
        cards: [
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "SR",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    },
                    {
                        pack_name: "Legends of Kev",
                        pack_type: "Secret Pack"
                    },
                ]
            },
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "SR",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    },
                    {
                        pack_name: "Legends of Smeff",
                        pack_type: "Secret Pack"
                    },
                ]
            },
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "SR",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    },
                    {
                        pack_name: "Legends of Legends",
                        pack_type: "Secret Pack"
                    },
                ]
            },
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    },
                    {
                        pack_name: "Legends of Kev",
                        pack_type: "Secret Pack"
                    },
                ]
            },
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "UR",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    },
                    {
                        pack_name: "Legends of Zeldas",
                        pack_type: "Secret Pack"
                    },
                ]
            },
            {
                name: "Sangan",
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
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
                id: 26202165,
                image_url: "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                rarity: "R",
                packs: [
                    {
                        pack_name: "Master Pack",
                        pack_type: "Normal Pack"
                    }
                ]
            },
        ]
    }
            
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

const packImageCache = new Map()

export const GetSecretPackImage = async (packName) => {

    const cached = packImageCache.get(packName)
    if (cached) {
        return cached
    }

    const promise = (async () => {
        try {

            const response = await api.post(
                BackendUrls.GETSECRETPACKSIMAGE,
                {
                    session: GetSessionToken(),
                    secret_pack: packName
                }
            )

            const result = {
                success: true,
                data: response.data
            }

            return result

        } catch (e) {
            return { success: false, error: e }
        }
    })()

    packImageCache.set(packName, promise)

    return promise
}

export const GetAllSecretPacks = async (session) => {
    try{
        //Dev Mode:

        /*
        
        if (import.meta.env.MODE == "development") {
            return { success: true, data: Dummydata }
        }
        */

        const response = await api.get(BackendUrls.GETALLSECRETPACKS)

        return  { success: true, response: response }
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

export const GetCardsFromSecretPacks = async (session, secretPacks) => {
    console.log(secretPacks)

    try{
        const OpenSecretPackData = {
            session: session,
            secretpacks: secretPacks
        }

        console.log(OpenSecretPackData)

        //Dev Mode:
        
        /*

        if (import.meta.env.MODE == "development") {
            return { success: true, data: DummydataSim }
        }

        */

        const response = await api.post(BackendUrls.OPENPACKFROMSECRETPACK, OpenSecretPackData)

        console.log(response)
        console.log(response.data.packs)

        return { success: true, data: response.data.packs , unlocked_packs: response.data.unlocked_secret_packs}
    } catch(e) {
        return { success: false, error: e }
    }
}