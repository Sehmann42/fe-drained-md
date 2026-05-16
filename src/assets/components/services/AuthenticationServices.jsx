import api from "../axios/Api"

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
        
        const response = await api.post(
            BackendRoutes.UserLogin,
            UserLogout)

        return { success: true, data: response.data }
    } catch (e) {
        return { success: false, error: e }
    }
}

