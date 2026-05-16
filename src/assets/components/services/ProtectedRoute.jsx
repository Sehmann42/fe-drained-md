import { Navigate } from "react-router-dom";
import { Pages } from "../../enums/EnumsPages";
import { GetSessionToken } from "./TokenStorage";

export default function ProtectedRoute({ children }) {
  const session = GetSessionToken();

  if (!session) {
    return <Navigate to={Pages.LOGIN} replace />;
  }

  return children;
}