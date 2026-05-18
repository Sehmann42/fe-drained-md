import { Navigate } from "react-router-dom";
import { Pages } from "../../enums/EnumsPages";
import { GetSessionToken } from "./TokenStorage";

import api from "../axios/Api";

const BASEURL = {
  TOKEN: "/token/"
}

function checkTokenIsAlive(){
  const session = GetSessionToken();
  response = api.get(BASEURL.TOKEN, {session})
  return response.data
}

export default function ProtectedRoute({ children }) {
  

  if (!checkTokenIsAlive) {
    return <Navigate to={Pages.LOGIN} replace />;
  }

  return children;
}