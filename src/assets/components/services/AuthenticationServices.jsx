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

        console.log(UserData)
        
        const response = await api.post(
            BackendRoutes.UserLogin,
            UserData)
        

        console.log(response.data)
        return response.data

    }catch(e){
        console.error(e)
        return true
    }
}

