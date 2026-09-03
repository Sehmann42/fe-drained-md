import LoadingSpinny from "../loading_blocks/LoadingSpinny";

const OverlayUpdateStatus = () => {
    return <>
        <div className=" overlay_laoding w-100 h-100 d-flex justify-content-around align-items-center p-2">
            <LoadingSpinny ratio="40px"/>
            <div>
                Update Collection...
            </div>
        </div>
    </>
}

export default OverlayUpdateStatus