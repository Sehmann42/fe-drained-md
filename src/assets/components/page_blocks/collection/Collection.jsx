import "../../../css/Collection/collection.css"

const Collection = ({children, elementsPerRow, maxHeight = "95%"}) => {

    return <>
        <div className=" h-100 p-3">
            <div style={{height: maxHeight}} className=" collection">
                <div
                    style={{
                        gridAutoRows: "auto",
                        gridTemplateColumns: "repeat(" + elementsPerRow + ", 1fr)",
                    }}

                    className=" 
                    collectionContent
                    overflow-auto
                    h-100 
                    w-100
                    p-2
                    ">
                        {children}
                    </div>
            </div>
            
        </div>
    </>
}

export default Collection