import "../../../css/Collection/collection.css"

const Collection = ({children, elementsPerRow}) => {

    return <>
        <div className=" h-100 p-3 ">
            <div
            style={{
                gridTemplateColumns: "repeat(" + elementsPerRow + ", 1fr)"
            }}

            className=" 
            collection 
            overflow-auto
            h-100 
            w-100
            p-2
            ">
                {children}
            </div>
        </div>
    </>
}

export default Collection