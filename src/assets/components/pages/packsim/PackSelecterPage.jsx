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

                console.log(rawData.response.data)

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
        
        <div className=" body">

            {
                isLoading ? <LoadingPage /> :
                <div className=" h-100 d-flex flex-column">
                    <h2>Campaigns</h2>
                    <Collection maxHeight="100%" elementsPerRow={6}>
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

                    <div className=" basketPositon">
                        <Basket goToPackSim={goToPackSim}>
                            {basket.map((data) => {
                                return <BasketItem data={data} />
                            })}
                        </Basket>
                    </div>
                </div>
            }
        </div>

        <PageFooter />
    </div>
        
    </>
}

export default PackSelectorPage