import Collection from "../../page_blocks/collection/Collection"

const HistoryItem = ({index, packName, packContent}) => {
    return <>
        <div className=" d-flex h-100 justify-content-center align-item-center flex-column">
            <div className="">
                Opening : {index}
            </div>
            
            <div>
                Test
            </div>
            <Collection>
                
            </Collection>
        </div>
    </>
}

export default HistoryItem