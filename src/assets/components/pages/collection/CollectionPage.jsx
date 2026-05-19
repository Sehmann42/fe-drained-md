import "../../../css/main.css"

import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import Collection from "../../page_blocks/collection/Collection"
import YGOCard from "../../page_blocks/cards/YGOCard"
import { useState, useEffect } from "react"
import SearchBar from "../../page_blocks/usability/SearchBar"
import { GetAllCardsFromCollection } from "../../services/CollectionServices"
import { GetSessionToken } from "../../services/TokenStorage"
import LoadingPage from "../../loading_blocks/LoadingPage"

function CollectionPage() {
    
    const [collectedCards, setCollectedCards] = useState([])
    const [displayedCards, setDisplayedCards] = useState([])

    const [searchText, setSearchText] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const handleChangeEvent = (event) => {
        setSearchText(event.target.value)
        filterData(event.target.value)
    }

    const filterData = (cardName) => {
        if (!cardName.trim()) {
            setDisplayedCards(collectedCards)
            return
        }

        const filtered = collectedCards.filter(card =>
            card.name.toLowerCase().includes(cardName.toLowerCase())
        )

        setDisplayedCards(filtered)
    }

    const getCollectionFromDb = async () => {
        const response = await GetAllCardsFromCollection(GetSessionToken())
        return response
    }

    useEffect(() => {
        
        //Get all Cards From User Collection from Backend

        const fetchData = async () => {
            const rawData = await getCollectionFromDb()

            setDisplayedCards(rawData.data.collection)
            setCollectedCards(rawData.data.collection)

            setIsLoading(false)
        }

        fetchData()

        return () => {
            
        };
    }, []);

    return <>
    <div className=" d-flex flex-column main-background h-100">
        <PageHeader />
        
        <div className=" h-10 p-3 d-flex w-100 justify-content-end align-items-center">
            <h4>Suchen : </h4>

            <span className=" w-1" />

            <SearchBar>
                <input
                 value={searchText}
                 onChange={handleChangeEvent}
                 type="text" 
                 className=" w-95"/>
            </SearchBar>
        </div>

        <div className=" h-100">
            { isLoading ? <LoadingPage />
                :
                <Collection elementsPerRow={8}>
                    {
                        displayedCards.map((data) => {
                            return <YGOCard cardData={data} />
                        })
                    }
                </Collection>
            }
        </div>

        <PageFooter />
    </div>
    
    </>
}

export default CollectionPage