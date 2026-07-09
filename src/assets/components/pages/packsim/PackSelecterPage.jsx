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
import SVGBasket from "../../page_blocks/icons/SVGBasket"

const PackSelectorPage = () => {

    const [basket, setBasket] = useState([])
    const [totalBasketUniquePacks, setTotalBasketUniquePacks] = useState(0)
    const [totalBasketPacks, setTotalBasketPacks] = useState(0)
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
        const filterBasket = basket.filter((item) => item.amount > 0).map(item => {
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

    const emptyBasket = () => {
        setBasket([])
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

    useEffect(() => {
            
        //Get all Cards From User Collection from Backend

        console.log(basket)
        
        if (basket.length > 0) {
            setTotalBasketPacks(basket.reduce((sum, pack) => sum += pack.amount, 0))
            setTotalBasketUniquePacks(basket.length)
        }else{
            setTotalBasketPacks(0)
            setTotalBasketUniquePacks(0)
        }
        
        

        return () => {
            
        };
    }, [basket]);

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

            <div className=" w-40 function-background">
                <div className=" p-3 h-100 d-flex flex-column">
                    <div className=" d-flex justify-content-between">
                        <div className=" d-flex align-items-center">
                            <SVGBasket ratio={"30px"} />
                            <div style={{width: "10px"}} />
                            <h4>Dein Korb</h4>
                        </div>
                    </div>
                    
                    <hr />

                    <div style={{minHeight: "0px"}} className=" overflow-auto h-100">
                        <Basket>
                            {basket.map((data) => {
                                return <BasketItem  data={data} basketRef={basket} setBasket={setBasket}/>
                            })}
                        </Basket>
                    </div>
                    
                    <hr />

                    <div className=" d-flex flex-column align-items-center ">
                        <div className=" highlightInfo w-100 d-flex justify-content-between align-items-center p-3 roundedCorners">
                            <div className=" d-flex flex-column">
                                <span>Packs ausgewählt</span>
                                <span>{totalBasketUniquePacks} Secret Packs</span>
                            </div>
                            
                            <div className=" align-items-center">
                                {totalBasketPacks} Packs
                            </div>
                        </div>
                        
                        <div style={{height: "20px"}} />

                        <div className=" bigPurpleButton w-100" onClick={() => goToPackSim()}>
                            Packs Öffnen
                        </div>
                        
                        <div style={{height: "20px"}} />

                        <div onClick={() => emptyBasket()} className=" bigPurpleButton bigPurpleButtonAlt w-100">
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