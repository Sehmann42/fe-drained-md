import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { StorageCookies } from "../../enums/EnumsCookies";
import { Pages } from "../../enums/EnumsPages";

export default function ProtectedRoute({ children }) {
  const session = Cookies.get(StorageCookies.SESSION);

  if (!session) {
    return <Navigate to={Pages.LOGIN} replace />;
  }

  return children;
}