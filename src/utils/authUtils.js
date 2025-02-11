import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    toast.success("Logout successfully");
    navigate("/login");
  };

  return handleLogout;
};

export default useLogout;
