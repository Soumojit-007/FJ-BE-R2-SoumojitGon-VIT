import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      setToken(token);        // ⭐ IMPORTANT
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return <div className="p-10 text-center">Logging you in...</div>;
};

export default OAuthSuccess;