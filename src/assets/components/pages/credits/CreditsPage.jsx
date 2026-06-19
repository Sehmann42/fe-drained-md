import PageFooter from "../../page_blocks/footer/Footer"
import PageHeader from "../../page_blocks/header/Header"

const CreditsPage = () => {
    return <>
    <div className="d-flex flex-column align-items-center main-background h-100">
        <PageHeader />

        <div className=" body w-50">
            <div className=" h-100 d-flex text-center flex-column">
                <h3>Icons</h3>
                <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by apien - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/create" title="create icons">Create icons created by customicondesign_1 - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/shipping-and-delivery" title="shipping and delivery icons">Shipping and delivery icons created by Royyan Wijaya - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/files-and-folders" title="files-and-folders icons">Files-and-folders icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/manifestation" title="manifestation icons">Manifestation icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/cards" title="cards icons">Cards icons created by Victoruler - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Uniconlabs - Flaticon</a>
                <a href="https://www.instagram.com/p/CSH9ff2B3vE/?e=1348020" title="darg magician girl">Loading Spinny Made by gummybunni on Instagram</a>
                <a href="https://www.flaticon.com/free-icons/logout" title="logout icons">Logout icons created by apien - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/minus" title="minus icons">Minus icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/filter" title="filter icons">Filter icons created by Saepul Nahwan - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/next-page" title="next page icons">Next page icons created by BizzBox - Flaticon</a>
            </div>
        </div>

        

        <PageFooter />
    </div>
    </>
}

export default CreditsPage