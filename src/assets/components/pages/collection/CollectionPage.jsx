import "../../../css/main.css"

import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"
import Collection from "../../page_blocks/collection/Collection"
import YGOCard from "../../page_blocks/cards/YGOCard"

function CollectionPage() {
    const Dummydata = {

    }

    return <>
    <div className=" d-flex flex-column main-background h-100">
        <PageHeader />
        
        <Collection >
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
        </Collection>

        <PageFooter />
    </div>
    
    </>
}

export default CollectionPage