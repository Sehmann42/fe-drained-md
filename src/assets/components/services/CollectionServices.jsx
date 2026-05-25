import api from "../axios/Api";

const BackendUrls = {
    GETALLCARDSFROMCOLLECTION: "/collection/",
    ADDCARDTOCOLLECTION:"/addcard/",
    REMOVECARDFROMCOLLECTION:"/removecard/",
    REMOVECARDSFROMCOLLECTION:"/removecards/",
    GETALLCARDSFROMDB:"/allcards",
    EXPORTCOLLECTION:"/collection/export/ydk",
    SYNCTODB:"/docs"
}

const Dummydata = [
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
        {
            name: "Sangan",
            id: 26202165,
            image_url: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
            amount: 4
        },
    ]

// =========================
// CACHE
// =========================

// globale caches
let cardsCache = null
let cardsPromise = null

const collectionCache = new Map()
const collectionPromises = new Map()

export const GetAllCardsFromDB = async () => {

    // Daten bereits vorhanden
    if (cardsCache) {
        return {
            success: true,
            data: cardsCache,
            cached: true
        }
    }

    // Request läuft bereits
    if (cardsPromise) {
        return cardsPromise
    }

    // Neuer Request
    cardsPromise = api
        .get(BackendUrls.GETALLCARDSFROMDB)
        .then((res) => {

            cardsCache = res.data

            return {
                success: true,
                data: res.data,
                cached: false
            }
        })
        .catch((err) => {

            return {
                success: false,
                error: err
            }
        })
        .finally(() => {
            cardsPromise = null
        })

    return cardsPromise
}

export const GetAllCardsFromCollection = async (session) => {

    // Cache Hit
    /*
    if (collectionCache.has(session)) {
        return {
            success: true,
            data: collectionCache.get(session),
            cached: true
        }
    }
    */

    // Request läuft bereits
    if (collectionPromises.has(session)) {
        return collectionPromises.get(session)
    }

    // Neuer Request
    const promise = api
        .post(
            BackendUrls.GETALLCARDSFROMCOLLECTION,
            { session }
        )
        .then((res) => {

            collectionCache.set(session, res.data)

            return {
                success: true,
                data: res.data,
                cached: false
            }
        })
        .catch((err) => {

            return {
                success: false,
                error: err
            }
        })
        .finally(() => {
            collectionPromises.delete(session)
        })

    collectionPromises.set(session, promise)

    return promise
}

export const AddCardToCacheCollection = (id, cardData) => {
    if (collectionCache) {
            const tmpCollection = collectionCache.get(session);

            if (tmpCollection?.collection) {

                const existingItem = tmpCollection.collection.find(item => item.id === id);

                if (existingItem) {
                    // Item existiert → amount erhöhen
                    existingItem.amount += 1;
                } else {
                    // Item existiert nicht → neu hinzufügen
                    const collectionItem = {
                        id: id,
                        amount: 1,
                        name: cardData.data.name,
                        image_url: cardData.data.image_url
                    };

                    tmpCollection.collection.push(collectionItem);
                }
            }
        }
}

export const AddCardToCollection = async (session, id) => {

    try {

        const response = await api.post(
            BackendUrls.ADDCARDTOCOLLECTION,
            { session, id }
        )

        const newCard = response.data

        // Cache aktualisieren
        if (collectionCache.has(session)) {

            const collectionData =
                collectionCache.get(session)

            if (collectionData?.collection) {

                const existingItem =
                    collectionData.collection.find(
                        item => item.id === id
                    )

                if (existingItem) {

                    existingItem.amount += 1

                } else {

                    collectionData.collection.push({
                        id: id,
                        amount: 1,
                        name: newCard.name,
                        image_url: newCard.image_url,
                        rarity: newCard.rarity
                    })
                }

                // Cache neu setzen
                collectionCache.set(
                    session,
                    { ...collectionData }
                )
            }
        }

        return {
            success: true,
            data: newCard
        }

    } catch (err) {

        return {
            success: false,
            error: err
        }
    }
}

export const RemoveCardFromCollection = async (session, id) => {
    try{
        //Dev Mode:
        
        /*

        if (import.meta.env.MODE == "development") {
            return { success: true, data: Dummydata }
        }

        */

        const response = await api.post(BackendUrls.REMOVECARDFROMCOLLECTION, {session, id})

        return { success: response.data }
    } catch(e) {
        return { success: false, error: e }
    }
}

let cachedCards = []
let removeTimeout = null

export const RemoveCardsFromCollection = async (session, id) => {
    console.log("hmm?")

    try {

        cachedCards.push(id)

        // alten Timer zurücksetzen
        if (removeTimeout) {
            clearTimeout(removeTimeout)
        }

        // Promise zurückgeben
        return new Promise((resolve) => {

            removeTimeout = setTimeout(async () => {
                try {

                    console.log(cachedCards)

                    const cardsToRemove = [...cachedCards]

                    // Cache direkt leeren
                    cachedCards = []

                    const response = await api.post(
                        BackendUrls.REMOVECARDSFROMCOLLECTION,
                        {
                            session,
                            ids: cardsToRemove
                        }
                    )

                    resolve({
                        success: response.data
                    })

                } catch (e) {
                    resolve({
                        success: false,
                        error: e
                    })
                }
            }, 500) // wartet 500ms nach letztem Spam-Klick
        })

    } catch (e) {
        console.log(e)

        return {
            success: false,
            error: e
        }
    }
}

export const SyncCollectionToYGODB = async (session) => {
    try{

        const response = await api.post(BackendUrls.SYNCTODB, {session})

    }catch(e){
        return { success: false, error: e}
    }
}

export const ExportCollection = async (session) => {
    try{
        const response = await api.post(BackendUrls.EXPORTCOLLECTION, {session: session})

        return {success: true, data: response.data}
    }catch(e){
        return { success: false, error: e}
    }
}