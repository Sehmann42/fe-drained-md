import { Navigate } from "react-router-dom";
import { Pages } from "../../enums/EnumsPages";
import { DeleteSessionToken, GetSessionToken } from "./TokenStorage";
import { useEffect, useState } from "react"

import api from "../axios/Api";

const BASEURL = {
  TOKEN: "/token/"
}

const checkIfTokesIsValid = async () => {
  const session =  GetSessionToken()
  const response = await api.post(BASEURL.TOKEN,{session})
  return response.data
}

export default function ProtectedRoute({ children }) {

  const [isValid, setIsValid] = useState(null)

  useEffect(() => {
    const check = async () => {
      const result = await checkIfTokesIsValid()
      //console.log(result)
      setIsValid(result)
    }

    check()
  }, [])

  //console.log(isValid)

  if (isValid === null) {
    return <div>Loading...</div>
  }

  if (isValid.data === false) {
    //console.log(GetSessionToken())
    DeleteSessionToken()
    //console.log("hallo????")
    return <Navigate to={Pages.LOGIN} replace />
  }

  return children
}