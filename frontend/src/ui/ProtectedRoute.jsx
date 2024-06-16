import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import Loading from "./Loading";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1. load the Authenticated user
  const { isAuthenticated, isAuthorized, isVerified, isLoading } = useAuthorize();
  // 2. check if is Authorized or not - check if is Authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("Your profile has not been verified yet.");
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

  // 3. while loading => show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  // 4. if user is Authenticated and Authorized => render the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute