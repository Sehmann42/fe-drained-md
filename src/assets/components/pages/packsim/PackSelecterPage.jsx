import React from "react"
import PageHeader from "../../page_blocks/header/Header"
import PageFooter from "../../page_blocks/footer/Footer"
import Basket from "../../page_blocks/basket/Basket"
import BasketItem from "../../page_blocks/basket/BasketItem"
import Collection from "../../page_blocks/collection/Collection"
import { GetAllSecretPacks } from "../../services/PackServices"
import { GetSessionToken } from "../../services/TokenStorage"
import { useState, useEffect } from "react"
import MDMasterPack from "../../page_blocks/cards/MDMasterPack"
import "../../../../assets/css/PackSelector/packselector.css"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../enums/EnumsPages"
import LoadingPage from "../../loading_blocks/LoadingPage"

const PackSelectorPage = () => {

    const [basket, setBasket] = useState([])
    const [masterPacks, setMasterPacks] = useState([]) 

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const handleClickEventPack = (packData) => {

        const existingItem = basket.find(
            item => item.name === packData.pack_name
        )

        if (existingItem) {

            const updatedBasket = basket.map(item => {
                if (item.name === packData.pack_name) {
                    return {
                        ...item,
                        amount: item.amount + 1
                    }
                }

                return item
            })

            setBasket(updatedBasket)

        } else {

            const newItem = {
                pack_id: packData.pack_id,
                name: packData.pack_name,
                image_url: packData.image_url,
                amount: 1
            }

            setBasket([...basket, newItem])
        }
    }

    const goToPackSim = () => {
        const filterBasket = basket.map(item => {
            return {
                pack_id: item.pack_id,
                amount: item.amount
            }
        })

        navigate(Pages.PACK_SIM, {
            state: {
                packs: filterBasket
            }
        })
    }

    useEffect(() => {
            
            //Get all Cards From User Collection from Backend
            
            const fetchData = async () => {
                const rawData = await GetAllSecretPacks(GetSessionToken())

                setMasterPacks(rawData.response.data)
                setIsLoading(false)
            }

            fetchData()
    
            return () => {
                
            };
        }, []);

    return <>
    <div className=" d-flex flex-column main-background h-100">
        <PageHeader />
        
        <div style={{flex:1}} className=" body px-3 d-flex">

            <div className=" w-100 d-flex flex-column">
                <div>
                    <div className=" d-flex flex-column">
                        <h4>Secret Packs</h4>
                        <p>Wähle die Secret Packs die du öffnen möchtest</p>
                    </div>
                </div>

                <div style={{flex:1, marginTop: "0px"}} className="overflow-auto">
                    <div style={{minHeight: 0}} className="d-flex flex-column ">
                    {
                        isLoading ? <LoadingPage /> :
                        <Collection elementsPerRow={5} gap="0.2rem">
                                {
                                    [...masterPacks].sort((a, b) => {
                                        if (a.pack_name == "Master Pack") return -1;
                                        if (b.pack_name == "Master Pack") return 1;
                                        return 0
                                    }).map((data) => {
                                        return <MDMasterPack key={data.pack_name} handleClickEventPack={handleClickEventPack} packData={data} />
                                    })
                                }
                        </Collection>
                    }
                    </div>
                </div>
            </div>
            
            <div style={{width:"50px"}} />

            <div className=" w-50 function-background">
                <div className=" p-3 h-100 d-flex flex-column">
                    <div className=" d-flex justify-content-between">
                        <div className=" d-flex flex-column">
                            <h4>Dein Korb</h4>
                        </div>
                        <div className=" d-flex flex-column">
                            Gesamt : Packs
                        </div>
                    </div>
                    
                    <hr />

                    <div style={{minHeight: "0px"}} className=" overflow-auto h-100">
                        <Basket>
                            {basket.map((data) => {
                                return <BasketItem data={data} />
                            })}
                        </Basket>
                    </div>
                    
                    <hr />

                    <div className=" d-flex flex-column align-items-center">
                        <div>
                            Packs ausgewählt
                        </div>

                        <div onClick={() => goToPackSim()}>
                            Packs Öffnen
                        </div>

                        <div>
                            Korb leeren
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <PageFooter />
    </div>
        
    </>
}

export default PackSelectorPage