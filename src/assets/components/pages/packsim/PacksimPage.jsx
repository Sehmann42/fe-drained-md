import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import YGOCard from "../../page_blocks/cards/YGOCard"
import "../../../../assets/css/Packsim/packsim.css"

import { useLocation } from "react-router-dom"
import HiddenCard from "../../page_blocks/cards/HiddenCard"


function PacksimPage() {
    const location = useLocation()

    const packs = location.state?.packs || []

    console.log(packs)

    return <>
    <div className=" d-flex flex-column h-100 main-background">
        <PageHeader />

        <div className=" h-100 d-flex p-3 justify-content-between">
            <div className=" d-flex flex-column w-70 p-2 ">
                <h2 className=" align-self-center">Pack Opener</h2>

                <span className=" align-self-center"> Pack Opened 0 / 10</span>

                <div className=" packGrid main-background">
                    <HiddenCard cardData={{name:"wusch"}}/>
                    <HiddenCard cardData={{name:"wusch"}}/>
                    <HiddenCard cardData={{name:"wusch"}}/>
                    <HiddenCard cardData={{name:"wusch"}}/>
                    <HiddenCard cardData={{name:"wusch"}}/>
                    <HiddenCard cardData={{name:"wusch"}}/>
                    <HiddenCard cardData={{name:"wusch"}}/>
                    <HiddenCard cardData={{name:"wusch"}}/>
                </div>

                <div className=" h-10 w-100 d-flex justify-content-around">
                    <div>
                        Open Pack
                    </div>
                    <div>
                        Next pack
                    </div>
                </div>
            </div>

            <div className=" d-flex justify-content-center w-20 p-2">
                <h2>Unlocked Packs</h2> 

                <div></div>
            </div>
        </div>

        <PageFooter />
    </div>
        
    </>
}

export default PacksimPage