import "../../../css/Collection/collection.css"

const Collection = ({children, elementsPerRow, maxHeight = "77vh"}) => {

    return <>
        <div className=" h-100 p-3 flexShrink">
            <div style={{height: maxHeight}} className=" collection">
                <div
                    style={{
                        gridTemplateColumns: "repeat(" + elementsPerRow + ", 1fr)",
                        height: maxHeight,
                        maxHeight: maxHeight,
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