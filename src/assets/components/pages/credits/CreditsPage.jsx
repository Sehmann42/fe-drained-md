import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"

const CreditsPage = () => {
    return <>
    <div className="d-flex flex-column main-background h-100">
        <PageHeader />

        <div className=" h-100 d-flex justify-content-center text-center">
            <span>Icons From : <a>https://www.flaticon.com/</a></span>
        </div>

        <PageFooter />
    </div>
    </>
}

export default CreditsPage