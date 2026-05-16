import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import YGOCard from "../../page_blocks/cards/YGOCard"
import "../../../../assets/css/Packsim/packsim.css"

import { useLocation } from "react-router-dom"
import HiddenCard from "../../page_blocks/cards/HiddenCard"
import { useEffect, useState } from "react"
import { GetCardsFromSecretPacks } from "../../services/PackServices"
import { GetSessionToken } from "../../services/TokenStorage"


function PacksimPage() {
    const location = useLocation()

    const [currPack, setCurrPack] = useState(0)
    const [openPack, setOpenPack] = useState(false)
    const [unlockedPacks, setUnlockedPacks] = useState([])
    const [currPackContent, setCurrPackContent] = useState([])
    const [pendingPacks, setPendingPacks] = useState([])

    const packs = location.state?.packs || []

    useEffect(() => {
        console.log(packs)

        const dataPacks = GetCardsFromSecretPacks(GetSessionToken(), packs)
        
        console.log(dataPacks.data[0].cards)

        setPendingPacks(dataPacks.data)
        setCurrPackContent(dataPacks.data[0].cards)

        //setzte Unlocked Packs

        

        return () => {
            
        };
    }, []);

    const handleNextPack = (event) => {
        setCurrPackContent(pendingPacks[currPack + 1].cards)
        setCurrPack(currPack + 1)
        setOpenPack(false)
    }

    const handleOpenPack = (event) => {
        setOpenPack(true)
    }

    const addUnlockedPack = () => {
        const existingItem = unlockedPacks.find(
            item => item.name === packData.packName
        )

        if (!existingItem) {
            const newItem = {
                name: packData.packName,
                id: packData.id
            }

            setUnlockedPacks([...unlockedPacks, newItem])
        } 
    }

    return <>
    <div className=" d-flex flex-column h-100 main-background">
        <PageHeader />

        <div className=" h-100 d-flex p-3 justify-content-between">
            <div className=" d-flex flex-column w-70 p-2 ">
                <h2 className=" align-self-center">Pack Opener</h2>

                <span className=" align-self-center"> Pack Opened {currPack + 1} / {pendingPacks.length}</span>

                <div className=" packGrid main-background">
                    {currPackContent.map((data) => {
                        return <HiddenCard cardData={{name:data.name, 
                            ygoprodeckId: data.ygoprodeckId, 
                            currPack:currPack, 
                            openPack:openPack}}/>
                    })}
                </div>

                <div className=" h-10 w-100 d-flex justify-content-around">
                    <div onClick={handleOpenPack}>
                        Open Pack
                    </div>
                    <div onClick={handleNextPack}>
                        Next pack
                    </div>
                </div>
            </div>

            <div className=" d-flex justify-content-center w-25  p-2">
                <h2>Unlocked Packs</h2> 

                <div>

                </div>
            </div>
        </div>

        <PageFooter />
    </div>
        
    </>
}

export default PacksimPage