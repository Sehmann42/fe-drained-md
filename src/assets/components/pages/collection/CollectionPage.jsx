import "../../../css/main.css"

import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import Collection from "../../page_blocks/collection/Collection"
import YGOCard from "../../page_blocks/cards/YGOCard"
import { useState, useEffect } from "react"
import SearchBar from "../../page_blocks/usability/SearchBar"
import { GetAllCardsFromCollection } from "../../services/CollectionServices"
import { GetSessionToken } from "../../services/TokenStorage"

function CollectionPage() {
    

    const [collectedCards, setCollectedCards] = useState([])
    const [displayedCards, setDisplayedCards] = useState([])

    const filterData = () => {

    }

    useEffect(() => {
        
        //Get all Cards From User Collection from Backend
        
        const rawData = GetAllCardsFromCollection(GetSessionToken())
        
        console.log(rawData.data)

        setDisplayedCards(rawData.data)

        return () => {
            
        };
    }, []);

    return <>
    <div className=" d-flex flex-column main-background h-100">
        <PageHeader />
        
        <div className=" h-10 d-flex w-100">
            <SearchBar>
                <input type="text" />
            </SearchBar>
        </div>

        <Collection >
            {
                displayedCards.map((data) => {
                    return <YGOCard cardData={data} />
                })
            }
        </Collection>

        <PageFooter />
    </div>
    
    </>
}

export default CollectionPage