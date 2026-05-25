import "../../../css/main.css"

import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import Collection from "../../page_blocks/collection/Collection"
import YGOCard from "../../page_blocks/cards/YGOCard"
import { useState, useEffect } from "react"
import SearchBar from "../../page_blocks/usability/SearchBar"
import { AddCardToCollection, GetAllCardsFromCollection, RemoveCardsFromCollection, GetAllCardsFromDB, ExportCollection } from "../../services/CollectionServices"
import { GetSessionToken } from "../../services/TokenStorage"
import LoadingPage from "../../loading_blocks/LoadingPage"

function CollectionPage() {
    
    const [allCardFromDB, setAllCardsFromDB] = useState([])

    const [collectedCards, setCollectedCards] = useState([])
    const [displayedCards, setDisplayedCards] = useState([])

    const [searchText, setSearchText] = useState("")
    const [dbSearchText, setDbSearchText] = useState("Sangan")
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingDB, setIsLoadingDB] = useState(true)

    const handleChangeEvent = (event) => {
        setSearchText(event.target.value)
        filterData(event.target.value)
    }

    const filterData = (cardName) => {

        console.log(collectedCards)

        let filtered = collectedCards

        if (!cardName.trim()) {

            filtered = collectedCards.filter(card =>
                card.amount > 0
            )

        } else {

            filtered = collectedCards.filter(card =>
                card.name.toLowerCase().includes(cardName.toLowerCase()) &&
                card.amount > 0
            )
        }

        // Alphabetisch sortieren
        filtered.sort((a, b) =>
            a.name.localeCompare(b.name)
        )

        setDisplayedCards(filtered)
    }

    const getCollectionFromDb = async () => {
        const response = await GetAllCardsFromCollection(GetSessionToken())
        return response
    }

    const getDBCards = async () => {
         const response = await GetAllCardsFromDB()
         return response
    }

    const handleOnClickAddCardInCollection = async (id) => {
        console.log(id)
        try{
            let exists = collectedCards.some(card => card.id === id)

            const cardData = await addCard(id)

            if (exists) {

                const updatedCards = collectedCards.map((card) => {

                    if (card.id === id) {
                        return {
                            ...card,
                            amount: Number(card.amount) + 1
                        }
                    }

                    return card
                })

                //console.log(collectedCards)

                const filtered = updatedCards.filter(card =>
                    card.amount > 0
                )

                setCollectedCards(filtered)
                setDisplayedCards(filtered)

            } else {

                const newCard = {
                    id,
                    amount: 1,
                    image_url: cardData.data.data.image_url,
                    name: cardData.data.data.name // falls du name nicht hast → später ersetzen
                }

                const filtered = collectedCards.filter(card =>
                    card.amount > 0
                )
                
                const updatedCards = [...filtered, newCard]

                setCollectedCards(updatedCards)
                setDisplayedCards(updatedCards)
            }

        }catch(e){
            console.error(e)
        }

    }

    const handleOnClickRemoveCardInCollection = (id) => {
        try{
            removeCard(id)

            const updatedCards = collectedCards.map((card) => {

                if (card.id === id) {
                    return {
                        ...card,
                        amount: Number(card.amount) - 1
                    }
                }

                return card
            })

            setCollectedCards(updatedCards)

            const filtered = updatedCards.filter(card =>
                card.amount > 0
            )

            setDisplayedCards(filtered)

        }catch(e){
            console.error(e)
        }
    }

    const handleOnClickExportCollection = (event) => {
        exportCollection()
    }

    const addCard = async (id) => {
        const response = await AddCardToCollection(GetSessionToken(), id)
        return response
    }

    const removeCard = (id) => {
        const response = RemoveCardsFromCollection(GetSessionToken(), id)
    }

    const exportCollection = async () => {

        function download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }

        try{

            const data = await ExportCollection(GetSessionToken())

            const filename = "collection.ydk"

            download(filename, data.data)
        }catch(e){
            console.error(e)
        }
    }

    const filteredCards =
        dbSearchText.length >= 3
            ? allCardFromDB.filter(card_data =>
                card_data.name.toLowerCase().includes(dbSearchText.toLowerCase())
            )
            : []

    useEffect(() => {

        console.log(GetSessionToken())

        const fetchAll = async () => {

            try {

                setIsLoading(true)
                setIsLoadingDB(true)

                const [collectionRes, dbRes] = await Promise.all([
                    getCollectionFromDb(),
                    GetAllCardsFromDB()
                ])

                const collection =
                    collectionRes?.data?.collection ?? []

                const allCards =
                    dbRes?.data.data ?? []

                console.log(collection.length)
                
                setCollectedCards(collection)
                setDisplayedCards(collection)

                //console.log(allCards)

                setAllCardsFromDB(allCards)

            } catch (error) {

                setIsLoading(false)
                setIsLoadingDB(false)
                console.error(error)

            } finally {

                setIsLoading(false)
                setIsLoadingDB(false)
            }
        }

        fetchAll()

    }, [])

    return <>
    <div className=" d-flex flex-column main-background h-100">
        <PageHeader />
        
        <div className=" h-10 p-3 d-flex w-65 align-items-center justify-content-between align-items-center">
            <div className=" w-80 d-flex">
                <h4>Suchen : </h4>

                <span className=" w-1" />

                <SearchBar width={50}>
                    <input
                    value={searchText}
                    onChange={handleChangeEvent}
                    type="text" 
                    className=" w-95"/>
                </SearchBar>
            </div>

            <div className=" machKlick d-flex flex-column justify-content-center align-items-center" onClick={handleOnClickExportCollection}>
                <img style={{width: "40px", height: "40px"}} src="/icons/other/export.png" />
                <span>
                    Export
                </span>
            </div>
            
        </div>

        <div className="d-flex h-100">
            <div style={{height: "72vh"}} className=" w-65">
                { isLoading ? <LoadingPage />
                :
                <Collection elementsPerRow={6}>
                    {
                        displayedCards.map((data) => {
                            return <YGOCard cardData={data}>
                                    <div onClick={() => handleOnClickAddCardInCollection(data.id)} className=" plusButton">
                                        <img style={{
                                            height: "50px",
                                            width: "50px"
                                        }} src="/icons/other/add.png" />
                                    </div>
                                    <div onClick={() => handleOnClickRemoveCardInCollection(data.id)} className=" subButton">
                                        <img style={{
                                            height: "50px",
                                            width: "50px"
                                        }} src="/icons/other/minus.png"/>
                                    </div>
                                    </YGOCard>
                        })
                    }
                </Collection>
            }
            </div>
            

            <div className=" w-35 h-100">
                <div className=" h-10 p-3 d-flex w-100 justify-content-between align-items-center">
                    <span>Suchen : </span>

                    <SearchBar width={70}>
                        <input
                        value={dbSearchText}
                        onChange={(event) => setDbSearchText(event.target.value)}
                        type="text" 
                        className=" w-100"/>
                    </SearchBar>
                </div>

                <div style={{height: "65vh"}} className="">
                    { isLoadingDB ? <LoadingPage />
                    :
                    
                    <Collection elementsPerRow={3}>
                        {
                            (dbSearchText.length >= 3
                                ? allCardFromDB.filter(card_data =>
                                    card_data.name.toLowerCase().includes(dbSearchText.toLowerCase())
                                )
                                : []
                            ).map((card_data) => {
                                return (
                                    <YGOCard key={card_data.id} cardData={card_data}>
                                        <div
                                            onClick={() => handleOnClickAddCardInCollection(card_data.id)}
                                            className="plusButton"
                                        >
                                            <img
                                                style={{ height: "50px", width: "50px" }}
                                                src="/icons/other/add.png"
                                            />
                                        </div>

                                        <div
                                            onClick={() => handleOnClickRemoveCardInCollection(card_data.id)}
                                            className="subButton"
                                        >
                                            <img
                                                style={{ height: "50px", width: "50px" }}
                                                src="/icons/other/minus.png"
                                            />
                                        </div>
                                    </YGOCard>
                                )
                            })
                        }
                    </Collection>
            
                    }
                </div>
            </div>
        </div>

        <PageFooter />
    </div>
    
    </>
}

export default CollectionPage