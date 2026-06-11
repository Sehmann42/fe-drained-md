import { useEffect, useState } from "react"
import Collection from "../../page_blocks/collection/Collection"
import LoadingPage from "../../loading_blocks/LoadingPage"

const FriendsList = ({width = "20%"}) => {

    const [isLoading, setIsLoading] = useState(true)

    const [addFriendUsername, setAddFriendUsername] = useState('')
    const [friends, setFriends] = useState([])

    useEffect(() => {
        
        const fetchData = () => {
            try{
                console.log("Hallo Hallo ich sag hallo hallooo")

            }catch(e){
                console.err(e)
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
                        friends.map((data) => { return <span>tmp</span>})
                    }
                </Collection>
            }
        </div>
    </div>
    </>
}

export default FriendsList