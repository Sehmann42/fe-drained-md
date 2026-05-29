
import { useEffect, useRef, useState } from "react"
import IconAddCard from "../../page_blocks/icons/IconAddCard"
import * as bootstrap from 'bootstrap';

import "../../../css/Usability/createcampaign.css"
import Collection from "../collection/Collection";

const NewCampaignItem = ({createNewCampaign}) => {

    const campaignModalRef = useRef(null)
    const campaignModalInstance = useRef(null)

    const [toBeInvitedFriends, setToBeInvitedFriends] = useState([])

    useEffect(() => {

        if (campaignModalRef.current) {
            campaignModalInstance.current =
                new bootstrap.Modal(campaignModalRef.current)
        }

        return () => {
            campaignModalInstance.current?.dispose()
        }

    }, [campaignModalRef])

    const openNewCampaignModal = () => {
        campaignModalInstance.current?.show()
    }

    const closeNewCampaignModal = () => {
        campaignModalInstance.current?.hide()
    }

    return <>
        <div onClick={openNewCampaignModal} style={{
            height: "200px",
        }} className=" campaignItem d-flex justify-content-center align-items-center">
            <div>
                <div className=" d-flex align-items-center justify-content-center">
                    <IconAddCard />
                </div>
                <div>
                    <b>New Campaign</b>
                </div>
            </div>
        </div>

        <div ref={campaignModalRef} className="modal modal-lg fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content main-background">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Campaign Creation</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="formCampaignCreationNameInput" class="form-label">Campaign Name</label>
                                <input type="text" class="form-control" id="formCampaignCreationNameInput" placeholder="name@example.com" />
                            </div>

                            <div>
                                <h2> Invites </h2>
                                <div className=" d-flex justify-content-between">
                                    <div className="w-50 p-3">
                                        <select className="form-select " aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div style={{margin: "0 25px"}} className="vl"/>

                                    <div className=" w-50">
                                        <Collection elementsPerRow={1} maxHeight="20vh">
                                            {
                                                toBeInvitedFriends.map((data) => <span>Checke ich gerade nicht</span>)
                                            }
                                        </Collection>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NewCampaignItem