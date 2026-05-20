import api from "../axios/Api"
import { GetAllSecretPacks } from "./PackServices"
import { DeleteSessionToken, GetSessionToken } from "./TokenStorage"

const BackendRoutes = {
    UserLogin: "/login/",
    UserLogout: "/logout/"
}

export const LoginUser = async (username, password) => {
    try {
        const UserData = {username, password}
        
        const response = await api.post(
            BackendRoutes.UserLogin,
            UserData)

        console.log(response)

        return { success: true, data: response.data }
    } catch (e) {
        return { success: false, error: e }
    }
}

export const LogoutUser = async (session) => {
    try {
        
        const LogoutData = {session: session}

        const response = await api.post(
            BackendRoutes.UserLogout,
            LogoutData)
        
        DeleteSessionToken()

        return { success: true, data: response.data }
    } catch (e) {
        return { success: false, error: e }
    }
}

