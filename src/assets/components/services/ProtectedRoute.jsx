import { Navigate } from "react-router-dom";
import { Pages } from "../../enums/EnumsPages";
import { DeleteSessionToken, GetSessionToken } from "./TokenStorage";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../axios/Api";

const BASEURL = {
  TOKEN: "/token/"
}

const checkIfTokesIsValid = async () => {
  try{
    const session = GetSessionToken()
    const response = await api.post(BASEURL.TOKEN,{session})
    console.log(response)
    return response.data
  }catch(e){
    console.error(e)
    return false
  }
}

export default function ProtectedRoute({ children }) {

  const [isValid, setIsValid] = useState(null)

  useEffect(() => {
    const check = async () => {
      const result = await checkIfTokesIsValid()
      console.log(result)
      setIsValid(result)
    }

    check()
  }, [])

  //console.log(isValid)

  if (isValid === null) {
    return <div>Loading...</div>
  }

  if (isValid.data === false) {
    DeleteSessionToken()
    return <Navigate to={Pages.LOGIN} />
  }

  return children
}