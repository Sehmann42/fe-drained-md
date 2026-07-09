import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import YGOCard from "../../page_blocks/cards/YGOCard"
import "../../../../assets/css/Packsim/packsim.css"

import { useLocation, useNavigate } from "react-router-dom"
import HiddenCard from "../../page_blocks/cards/HiddenCard"
import { useEffect, useState } from "react"
import { GetCardsFromSecretPacks } from "../../services/PackServices"
import { GetSessionToken } from "../../services/TokenStorage"
import MDMasterPack from "../../page_blocks/cards/MDMasterPack"
import React from "react"
import { Pages } from "../../../enums/EnumsPages"
import IconUnpackPack from "../../page_blocks/icons/IconUnpackPack"
import IconOpenNextPack from "../../page_blocks/icons/IconOpenNextPack"
import LoadingPage from "../../loading_blocks/LoadingPage"


function PacksimPage() {
    const location = useLocation()

    const [isLoading, setIsLoading] = useState(true)

    const [currPack, setCurrPack] = useState(0)
    const [openPack, setOpenPack] = useState(false)
    const [unlockedPacks, setUnlockedPacks] = useState([])
    const [currPackContent, setCurrPackContent] = useState([])
    const [pendingPacks, setPendingPacks] = useState([])

    const [unlockedSecretPacks, setUnlockedSecretPacks] = useState([])
    const [diffState, setDiffState] = useState(false)

    const [lockSecretPacks, setLockSecretPacks] = useState("")
    const [hardLockSecretPacks, setHardLockSecretPacks] = useState("")
    const [flippedCards, setFlippedCards] = useState(0)

    const [flipToSecretPack, setFlipToSecretPack] = useState(false)

    const navigate = useNavigate()

    const packs = location.state?.packs || []

    const [newPacks, setNewPacks] = useState()

    useEffect(() => {

        const fetchData = async () => {
            try{
                console.log("wusch")

                const dataPacks = await GetCardsFromSecretPacks(GetSessionToken(), packs)

                //console.log("Dataapcks")
                //console.log(dataPacks)

                const CurrPackData = {
                    pack_name : dataPacks.data[currPack].packName,
                    cards : dataPacks.data[currPack].cards
                }

                setPendingPacks(dataPacks.data)

                console.log(CurrPackData.cards)

                setCurrPackContent(CurrPackData.cards)

                //setzte Unlocked Packs
                
                 console.log(dataPacks.unlocked_packs)

                setUnlockedSecretPacks(dataPacks.unlocked_packs)

                setLockSecretPacks("lock")
                setHardLockSecretPacks("") 
            }catch(e){
                console.error(e)
            }finally{
                setIsLoading(false)
            }
            
        }

        fetchData()

        //checkUnlockedPacks()

        return () => {
            
        };
    }, []);

    useEffect(() => {        
        let tmpCurrPack = 0

        if (diffState) {
            console.log("SEITEN WECHSEL!")
            const fetchData = async () => {

                try{
                    const dataPacks = await GetCardsFromSecretPacks(GetSessionToken(), newPacks)
                
                    console.log(dataPacks)

                    const CurrPackData = {
                        pack_name : dataPacks.data[tmpCurrPack].packName,
                        cards : dataPacks.data[tmpCurrPack].cards
                    }

                    setCurrPack(tmpCurrPack)
                    setOpenPack(false)
                    setPendingPacks(dataPacks.data)
                    setCurrPackContent(CurrPackData.cards)
                    setUnlockedPacks([])
                    //setzte Unlocked Packs

                    setHardLockSecretPacks("")  

                    if (flipToSecretPack) {
                        setHardLockSecretPacks("lock")
                    }
                }catch(e){
                    console.error(e)
                }finally{
                    setIsLoading(false)
                }
            }

            fetchData()
        }

        

        //checkUnlockedPacks()

        return () => {
            
        };
    }, [location.state, diffState]);
    

    useEffect(() => {
        if (currPack + 1 == pendingPacks.length){
            if (flippedCards == 8) {
                setLockSecretPacks("")
            }
        }

        return () => {
            
        };
    }, [flippedCards]);

    const handleNextPack = (event) => {
        if (currPack + 1 < pendingPacks.length){
            handleOpenPack()
            setCurrPackContent(pendingPacks[currPack + 1]?.cards)
            setCurrPack(currPack + 1)
            setOpenPack(false)
            setFlippedCards(0)
        }
    }

    const handleOpenPack = (event) => {
        if(!openPack){
            setOpenPack(true)
            checkUnlockedPacks()
            setFlippedCards(8)
        }
    }

    /**
     * Use this for Flip All
     * check if card contains secret packs
     */
    const checkUnlockedPacks = () => {
        const CurrPackData = {
            pack_name : pendingPacks[currPack]?.pack_name,
            cards : pendingPacks[currPack]?.cards,
        }

        for (const card of CurrPackData.cards) {
            //console.log(card)
            const CardData = {
                rarity: card.rarity,
                packs: card.packs
            } 

            if (CardData.rarity == "UR" || CardData.rarity == "SR"){
                addUnlockedPacks(CardData.packs)
            }
        }
    }

    const checkUnlockedPacksSingle = (data) => {
        if (data.rarity == "UR" || data.rarity == "SR"){
            addUnlockedPacks(data.packs)
        }
    }

    const handleClickEventPack = (packData) => {
        //console.log(packData)
        //console.log(packData)
        //console.log()

        const newPack = {
                pack_id: packData.pack_id,
                amount: 10
            }
        
        setIsLoading(true)
        setFlipToSecretPack(true)
        goToPackSim(newPack)
    }

    /**
     * 
     * Flip Card Event
     * 
     * @param {*} cardData 
     */
    const flipCard = (cardData) => {
        checkUnlockedPacksSingle(cardData)
        setFlippedCards(flippedCards + 1)
    }


    const getPackId = (pack_name) => {
        //console.log(unlockedSecretPacks)

        const pack = unlockedSecretPacks.find(
            p => p.pack_name === pack_name
        )

        return pack?.pack_id
    }

    const getPackImage = (pack_name) => {
        const pack = unlockedSecretPacks.find(
            p => p.pack_name === pack_name
        )

        return pack?.image_url
    }

    /**
     * 
     * adds Unlocked Secret Packs to Selection
     * 
     * @param {} cardPacks 
     */
    const addUnlockedPacks = (cardPacks) => {

        //console.log(unlockedSecretPacks)
        //console.log(cardPacks)

        setUnlockedPacks(prev => {

            const updatedPacks = [...prev]

            for (const cardPack of cardPacks) {

                const exists = updatedPacks.find(
                    item => item.pack_name === cardPack.pack_name
                )

                const pack_id = getPackId(cardPack.pack_name)
                const pack_image = getPackImage(cardPack.pack_name)
                
                console.log(cardPack)

                if (!exists && cardPack.pack_type == "Secret Pack") {

                    updatedPacks.push({
                        pack_name: cardPack.pack_name,
                        pack_id: pack_id,
                        packType: cardPack.pack_type,
                        image_url: pack_image,
                        image_url_wide: cardPack.image_url_wide
                    })
                }
            }

            return updatedPacks
        })
    }

    const goToPackSim = (pack) => {
        setDiffState(true)

        setNewPacks([pack])

        //console.log(pack)

        /*

        navigate(Pages.PACK_SIM, {
            state: {
                packs: [pack]
            }
        })

        */
    }

    return <>
    <div className=" d-flex flex-column h-100 main-background">
        <PageHeader />

        <div className="body d-flex p-3 ">
            <div className="d-flex flex-column overflow-hidden w-100">
                <div style={{ minHeight: 0 }} className=" w-100 d-flex h-100">
                    <div style={{minHeight: 0}} className=" d-flex flex-column w-70 p-2 ">
                        <h2 className=" align-self-center">Pack Opener</h2>

                        <span className=" align-self-center"> Pack Opened {currPack + 1} / {pendingPacks.length}</span>

                        {
                            (isLoading) ? <LoadingPage /> :
                            <div className=" packGrid main-background">
                                {currPackContent.map((data) => {
                                    return <HiddenCard cardData={{
                                        name:data.name, 
                                        id: data.id, 
                                        data:data,
                                        currPack:currPack, 
                                        openPack:openPack,
                                        flipCard:flipCard}}/>
                                })}
                            </div>
                        }
                    
                    </div>

                    <div style={{minHeight: 0}} className=" d-flex flex-column w-20 p-2 ">
                        <h2 className=" d-flex justify-content-center">Unlocked Packs</h2> 
                        
                        <br />

                        <div 
                            style={{flex:"1" , overflow:"auto", minHeight: 0}} 
                            className={" secretPackSelection  d-flex flex-column " + lockSecretPacks + " " + hardLockSecretPacks}>
                            {unlockedPacks.map((data) => {
                                return <MDMasterPack handleClickEventPack={handleClickEventPack} packData={data} />
                            })}
                        </div>
                    </div>
                </div>

                <div style={{minHeight: 0}} className=" d-flex justify-content-between">
                    <div className=" d-flex justify-content-around w-70">
                        <div className="d-flex flex-column justify-content-center" onClick={handleOpenPack}>
                            <IconUnpackPack />
                            <span>Open Pack</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center" onClick={handleNextPack}>
                            <IconOpenNextPack />
                            <span>Next pack</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <PageFooter />
    </div>
    </>
}

export default PacksimPage