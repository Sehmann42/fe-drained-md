import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"

const CreditsPage = () => {
    return <>
    <div className="h-100 main-background">
        <PageHeader />

        <div className=" h-100 d-flex justify-content-center text-center">
            <span>Icons From : https://www.flaticon.com/</span>
        </div>

        <PageFooter />
    </div>
    </>
}

export default CreditsPage