import LoadingSpinny from "./LoadingSpinny"
import "../../../assets/css/Usability/loadingPage.css"

function LoadingPage() {
    return <>
    <div className=" h-100 d-flex justify-content-center align-items-center">
        <div className=" d-flex justify-content-center flex-column">
            <LoadingSpinny />
            <br />
            <br />
            <br />
            <br />
            <h2 className=" align-self-center">
                Loading...
            </h2>
        </div>
        
    </div>
    </>
}

export default LoadingPage