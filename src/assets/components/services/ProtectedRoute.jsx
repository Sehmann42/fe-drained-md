import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { StorageCookies } from "../../enums/EnumsCookies";

export default function ProtectedRoute({ children }) {
  const session = Cookies.get(StorageCookies.SESSION);

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}