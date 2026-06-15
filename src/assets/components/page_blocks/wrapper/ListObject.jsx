const ListObject = ({children, maxHeight}) => {
    return <>
        <div className=" h-100 ">
            <div className=" overflow-hidden" style={{ height: maxHeight, border: "1px solid white", borderRadius: "10px"}}>
                <div className=" " style={{
                    height: maxHeight,
                    maxHeight: maxHeight
                }} className=" d-flex flex-column overflow-auto p-2">
                    {children}
                </div>
            </div>
        </div>
    </>
}
export default ListObject