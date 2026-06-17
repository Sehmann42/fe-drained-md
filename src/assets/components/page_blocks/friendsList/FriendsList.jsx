import { useEffect, useState } from "react"
import Collection from "../../page_blocks/collection/Collection"
import LoadingPage from "../../loading_blocks/LoadingPage"
import {ServiceGetFriendsListFromUser} from "../../services/FriendsServices"
import { data } from "react-router-dom"
import { GetSessionToken } from "../../services/TokenStorage"

const FriendsList = ({width = "20%"}) => {

    const [isLoading, setIsLoading] = useState(true)

    const [addFriendUsername, setAddFriendUsername] = useState('')
    const [friends, setFriends] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                
                const data = await ServiceGetFriendsListFromUser(GetSessionToken())

                setFriends(data.friends)

            }catch(e){
                console.error(e)
            }finally{
                setIsLoading(false)
            }
        }

        fetchData()

        return () => {
            
        };
    }, []);

    const addFriend = () => {
        
    }

    const removeFriend = () => {

    }

    return <>
    <div style={{width: width}}>
        <div className=" w-100 h-100 d-flex flex-column">
            <h2>Friends List</h2>
            
            {
                isLoading? <LoadingPage /> :
                <Collection maxHeight="100%">
                    {
                        friends.map((data) => { return <span>{data.username} : {data.status}</span>})
                    }
                </Collection>
            }
        </div>
    </div>
    </>
}

export default FriendsList