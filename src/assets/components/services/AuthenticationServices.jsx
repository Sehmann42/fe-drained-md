import api from "../axios/Api"

const BackendRoutes = {
    UserLogin: "/login/"
}

try {
  const res = await api.get("/");
  console.log(res);
} catch (err) {
  console.log(err);
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

