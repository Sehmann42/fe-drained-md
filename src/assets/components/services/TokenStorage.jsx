import Cookies from "js-cookie"

import { StorageCookies } from '../../enums/EnumsCookies.jsx';

export const SetSessionToken = (session) => {
    Cookies.set(StorageCookies.SESSION, 
                    data.data.session, 
                    {expires: 200000})
}

export const GetSessionToken = () => {
    return Cookies.get(StorageCookies.SESSION)
}

export const DeleteSessionToken = () => {
    Cookies.remove(StorageCookies.SESSION)
}