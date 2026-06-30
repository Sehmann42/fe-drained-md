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
import IconExport from "../../page_blocks/icons/IconExport"
import IconAddCard from "../../page_blocks/icons/IconAddCard"
import IconRemoveCard from "../../page_blocks/icons/IconRemoveCard"
import SVGDownloadButton from "../../page_blocks/icons/SVGDownloadButton"
import SVGCollectionStack from "../../page_blocks/icons/SVGCollectionStack"

function CollectionPage() {
    
    const [allCardFromDB, setAllCardsFromDB] = useState([])

    const [collectedCards, setCollectedCards] = useState([])
    const [displayedCards, setDisplayedCards] = useState([])

    const [totalCollectedCards, setTotalCollectedCards] = useState(collectedCards.length)

    const [searchText, setSearchText] = useState("")
    const [dbSearchText, setDbSearchText] = useState("Sangan")
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingDB, setIsLoadingDB] = useState(true)

    const handleChangeEvent = (event) => {
        setSearchText(event.target.value)
        filterData(event.target.value)
    }

    const handleChangeEventDB = (event) => {
        setSearchText(event.target.value)
    }

    const filterData = (cardName, updatedCollection = []) => {

        let filtered =
            updatedCollection.length > 0
                ? updatedCollection
                : collectedCards

        if (!cardName.trim()) {

            filtered = filtered.filter(card =>
                card.amount > 0
            )

        } else {

            filtered = filtered.filter(card =>
                card.name.toLowerCase().includes(cardName.toLowerCase()) &&
                card.amount > 0
            )
        }

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
        let updatedCards = collectedCards

        try{
            let exists = collectedCards.some(card => card.id === id)

            const cardData = await addCard(id)

            if (exists) {

                updatedCards = collectedCards.map((card) => {

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

            } else {
                const newCard = {
                    id,
                    amount: 1,
                    image_url: cardData.data.data.image_url,
                    rarity: cardData.data.data.rarity,
                    name: cardData.data.data.name // falls du name nicht hast → später ersetzen
                }

                updatedCards = [...collectedCards, newCard]

                setCollectedCards(updatedCards)
            }

        }catch(e){
            console.error(e)
        }finally{
            filterData(searchText, updatedCards)
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

            filterData(searchText, updatedCards)
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

    useEffect(() => {
        setTotalCollectedCards(collectedCards.length)
    }, [collectedCards])

    return <>
    <div className=" d-flex flex-column main-background h-100 overflow-hidden">
        <PageHeader />

        <div className=" body px-3 d-flex flex-column">
            <div className=" d-flex justify-content-between">
                <div className=" d-flex flex-column">
                    <h3>Collection</h3>
                    <p>Verwalte und Durchsuche deine Karten.</p>
                </div>
                
                <div className=" d-flex flex-column">
                    <div className=" d-flex flex-row-reverse">
                        <div onClick={handleOnClickExportCollection} className="btn w-65">
                            <SVGDownloadButton ratio={"30px"} />
                            <span>
                                Export (YDK)
                            </span>
                        </div>
                    </div>
                    <p>Exportiere deine gesamte Kollektion im YDK Format.</p>
                </div>
            </div>

            <div style={{minHeight: 0}} className=" d-flex h-100">
                <div style={{minHeight: 0}} className=" d-flex w-50 function-background flex-column p-3">
                    <div className=" d-flex justify-content-between">
                        <div className=" d-flex align-items-center">
                            <SVGCollectionStack ratio={"35px"}/>
                            <div style={{width: "10px"}}/>
                            <h4 style={{color:"#814AF6"}}>
                                Deine Collection
                            </h4>
                        </div>

                        <div className=" d-flex">
                            <div>
                                {totalCollectedCards} Karten
                            </div>

                            <div style={{width: "10px"}}/>

                            <div>
                                Filter
                            </div>
                        </div>
                    </div>
                    
                    <div style={{marginTop: "5px"}}>
                        <SearchBar width={"100%"} searchText={searchText} handleChangeEvent={handleChangeEvent} />
                    </div>

                    <hr />

                    <div style={{flex:1, marginTop: "0px"}} className="  overflow-auto">
                        <div style={{minHeight: 0}} className="d-flex flex-column ">
                            { isLoading ? <LoadingPage />
                                :
                                <Collection maxHeight="100%" elementsPerRow={5}>
                                    {
                                        displayedCards.map((data) => {
                                            return  <YGOCard cardData={data}>
                                                        <div onClick={() => handleOnClickAddCardInCollection(data.id)} className=" plusButton">
                                                            <IconAddCard />
                                                        </div>
                                                        <div onClick={() => handleOnClickRemoveCardInCollection(data.id)} className=" subButton">
                                                            <IconRemoveCard />
                                                        </div>
                                                    </YGOCard>
                                        })
                                    }
                                </Collection>
                            }
                        </div>
                    </div>
                </div>
                
                <div style={{width:"50px"}} />

                <div style={{minHeight: 0}} className=" d-flex w-50 function-background flex-column p-3">
                    <div style={{flex:1}} className="  overflow-auto">
                        <div style={{minHeight: 0}} className="d-flex flex-column ">
                            { isLoadingDB ? <LoadingPage />
                                :
                                <Collection maxHeight="100%" elementsPerRow={5}>
                                    {
                                        (dbSearchText.length >= 3
                                            ? allCardFromDB.filter(card_data =>
                                                card_data.name.toLowerCase().includes(dbSearchText.toLowerCase())
                                            )
                                            : []
                                        ).map((card_data) => {
                                            return (
                                                <YGOCard key={card_data.id} cardData={card_data}>
                                                    <div onClick={() => handleOnClickAddCardInCollection(card_data.id)} className="plusButton">
                                                        <IconAddCard />
                                                    </div>

                                                    <div onClick={() => handleOnClickRemoveCardInCollection(card_data.id)} className="subButton">
                                                        <IconRemoveCard />
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
            </div>
        </div>  
        <PageFooter />
    </div>
    
    </>
}

export default CollectionPage