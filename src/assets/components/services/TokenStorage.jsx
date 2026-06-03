import Cookies from "js-cookie"

import { StorageCookies } from '../../enums/EnumsCookies.jsx';

export const SetSessionToken = (session) => {
    Cookies.set(StorageCookies.SESSION, 
                    session, 
                    {expires: 200000})
}

export const GetSessionToken = () => {
    return Cookies.get(StorageCookies.SESSION)
}

export const DeleteSessionToken = () => {
    Cookies.remove(StorageCookies.SESSION)
}

export const SetCampaignToken = (campaign_id) => {
    Cookies.set(StorageCookies.CAMPAIGN, 
                    campaign_id, 
                    {expires: 200000})
}

export const GetCampaignToken = () => {
    return Cookies.get(StorageCookies.CAMPAIGN)
}

export const DeleteCampaignToken = () => {
    Cookies.remove(StorageCookies.CAMPAIGN)
}