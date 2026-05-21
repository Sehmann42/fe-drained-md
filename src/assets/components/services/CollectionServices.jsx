import api from "../axios/Api";

const BackendUrls = {
    GETALLCARDSFROMCOLLECTION: "/collection/",
    ADDCARDTOCOLLECTION:"/addcard/",
    REMOVECARDFROMCOLLECTION:"/removecard/",
    GETALLCARDSFROMDB:"/allcards"
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

export const GetAllCardsFromDB = (session) => {
  return api.get(BackendUrls.GETALLCARDSFROMDB)
    .then(res => ({
      success: true,
      data: res.data
    }))
    .catch(err => ({
      success: false,
      error: err
    }))
}

export const GetAllCardsFromCollection = (session) => {
  return api.post(BackendUrls.GETALLCARDSFROMCOLLECTION, { session })
    .then(res => ({
      success: true,
      data: res.data
    }))
    .catch(err => ({
      success: false,
      error: err
    }))
}

export const AddCardToCollection = async (session, id) => {
    try{
        //Dev Mode:
        
        /*

        if (import.meta.env.MODE == "development") {
            return { success: true, data: Dummydata }
        }

        */

        const response = await api.post(BackendUrls.ADDCARDTOCOLLECTION, {session, id})

        return { success: response.data }
    } catch(e) {
        return { success: false, error: e }
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