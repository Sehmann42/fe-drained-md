import { useEffect, useState } from "react"
import Collection from "../../page_blocks/collection/Collection"
import LoadingPage from "../../loading_blocks/LoadingPage"
import {ServiceGetFriendsListFromUser} from "../../services/FriendsServices"
import { data } from "react-router-dom"
import { GetSessionToken } from "../../services/TokenStorage"
import SideFriendListItem from "./SideFriendListItem"
import IconFriendList from "../icons/IconFriendList"

const FriendsList = ({width = "15%"}) => {

    const [isLoading, setIsLoading] = useState(true)

    const [addFriendUsername, setAddFriendUsername] = useState('')
    const [friends, setFriends] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                
                const data = await ServiceGetFriendsListFromUser(GetSessionToken())

                setFriends(data.friends ? data.friends : [])

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
    <div className=" function-background" style={{width: width}}>
        <div className=" w-100 h-100 d-flex flex-column">
            <div style={{fontSize:"1.2rem"}} className=" pt-3 d-flex px-3 align-items-center">
                <IconFriendList ratio={"29px"}/>
                <div>Friends List</div>
            </div>
            
            
            {
                isLoading? <LoadingPage /> :
                <Collection maxHeight="100%">
                    {
                        friends.map((data) => { return <SideFriendListItem data={data} />})
                    }
                </Collection>
            }

            <div className=" px-3 pb-3">
                <button style={{color:"white"}} className=" w-100 btn "> Alle Freunde </button>
            </div>
        </div>
    </div>
    </>
}

export default FriendsList