import api from "../axios/Api"

const FriendUrls = {
    ADDFRIEND: "/friend/add",
    GETFRIEND: "/friend/get",
    REMOVEFRIEND: "/friend/remove"
}

const enviroment = import.meta.env.MODE

export async function ServiceGetFriendsListFromUser(session) {
    try{
        if (enviroment == "development" && false){
            return {success: true, friends: dummyDataFriendsList}
        }

        const GetFriendData = {
            "session" : session
        }
        
        const response = await api.post(FriendUrls.GETFRIEND, GetFriendData)

        //console.log(response)

        return {success: response.data.success, friends: response.data.data}


    }catch(e){
        console.error(e)
    }
}

export async function ServiceAddFriend(session, username) {
    try{
        if (enviroment == "development" && false){
            return {success: true, friends: dummyDataFriendsList}
        }

        const AddFriendData = {
            "session" : session,
            "username" : username
        }
        
        const response = await api.post(FriendUrls.ADDFRIEND, AddFriendData)

        //console.log(response)

        return {success: response.data.success, friends: response.data.data}


    }catch(e){
        console.error(e)
    }
}

export async function ServiceRemoveFriend(session, user_id) {
    try{
        if (enviroment == "development" && false){
            return {success: true, friends: dummyDataFriendsList}
        }

        const RemoveFriendData = {
            "session" : session,
            "user_id" : user_id
        }
        
        const response = await api.post(FriendUrls.REMOVEFRIEND, RemoveFriendData)

        //console.log(response)

        return {success: response.data.success, friends: response.data.data}

    }catch(e){
        console.error(e)
    }
}