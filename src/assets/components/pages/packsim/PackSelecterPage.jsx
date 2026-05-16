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

const PackSelectorPage = () => {

    const [basket, setBasket] = useState([])
    const [masterPacks, setMasterPacks] = useState([]) 

    const handleClickEventPack = (packData) => {

        const existingItem = basket.find(
            item => item.name === packData.packName
        )

        if (existingItem) {

            const updatedBasket = basket.map(item => {
                if (item.name === packData.packName) {
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
                name: packData.packName,
                id: packData.id,
                amount: 1
            }

            setBasket([...basket, newItem])
        }
    }

    useEffect(() => {
            
            //Get all Cards From User Collection from Backend
            
            const rawData = GetAllSecretPacks(GetSessionToken())

            console.log(rawData)

            setMasterPacks(rawData.data)
    
            return () => {
                
            };
        }, []);

    return <>
    <div className=" d-flex flex-column main-background h-100">
        <PageHeader />
        
        <div className=" h-100">
            <Collection>
                {masterPacks.map((data) => {
                    return <MDMasterPack handleClickEventPack={handleClickEventPack} packData={data} />
                })}
            </Collection>

            <div className=" basketPositon">
                <Basket>
                    {basket.map((data) => {
                        return <BasketItem data={data} />
                    })}
                </Basket>
            </div>
        </div>

        <PageFooter />
    </div>
        
    </>
}

export default PackSelectorPage