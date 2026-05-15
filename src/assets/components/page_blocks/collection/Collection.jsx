import "../../../css/Collection/collection.css"

const Collection = ({children}) => {

    return <>
        <div className=" h-100 p-4 ">
            <div className=" 
            collection 
            overflow-auto
            h-100 
            w-100
            p-2
            d-flex
            justify-content-between
            ">
                {children}
            </div>
        </div>
    </>
}

export default Collection