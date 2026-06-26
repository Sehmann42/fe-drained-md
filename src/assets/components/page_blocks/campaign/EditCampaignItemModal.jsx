import { useEffect, useRef } from "react"
import * as bootstrap from 'bootstrap';
import { useState } from "react";
import { ServiceRenameCampaign } from "../../services/CampaignServices";
import { GetSessionToken } from "../../services/TokenStorage";
import LoadingPage from "../../loading_blocks/LoadingPage";

const EditCampaignItemModal = ({ref, data, closeModalMethod, updateCampaigns}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [disableButtons, setDisabledButtons] = useState(false)

    const [currCampaignName, setCurrCampaignName] = useState("")

    /*

    const CampaignItemData = {
        campaignId: data.pid,
        campaignName: data.name,
        campaignPlayers: data.players ? data.players : []
    }

    */

    const handleOnCampaignNameChange = (event) => {
        setCurrCampaignName(event.target.value)
    }   

    const commitChanges = () => {
        const pushChanges = async () => {
            try{
                if (data.campaignName != currCampaignName) {
                    //Campaign Name was changed
                    if (currCampaignName.length > 0) {
                        const response = await ServiceRenameCampaign(GetSessionToken(), data.campaignId, currCampaignName)
                    }
                }
            }catch(e){
                console.error(e)
            }finally{
                setIsLoading(false)
                updateCampaigns()
                setDisabledButtons(false)
                closeModalMethod()
            }
        }

        setDisabledButtons(true)
        setIsLoading(true)
        pushChanges()
    }


 
    useEffect(() => {
        
        setCurrCampaignName(data.campaignName)

        return () => {
            
        };
    }, [data]);

    

    return <>
        <div ref={ref}
            className="modal modal-lg fade" 
            id="exampleModal" 
            tabindex="-1" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true">
            <div className="modal-dialog">
                <form className="modal-content main-background">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit {data.campaignName}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div style={{minHeight:"400px"}} className="modal-body">
                        { isLoading ? <LoadingPage /> : 
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Campaign Name</label>
                                <input onChange={handleOnCampaignNameChange} value={currCampaignName} type="email" class="form-control" id="exampleFormControlInput1" placeholder={data.campaignName} />
                            </div>
                        }
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button disabled={disableButtons} type="button" className="btn btn-primary btn-danger">Delete</button>
                        
                        <div className=" d-flex justify-content-between w-25 flex-row-reverse">
                            <button disabled={disableButtons} onClick={() => commitChanges()} type="button" className="btn btn-primary btn-success">Commit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default EditCampaignItemModal