import api from "../axios/Api";

const BackendUrls = {
    GETALLCARDSFROMCOLLECTION: "/collection/"
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

export const AddCardToCollection = (session, id) => {
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

export const RemoveCardFromCollection = (session, id) => {
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