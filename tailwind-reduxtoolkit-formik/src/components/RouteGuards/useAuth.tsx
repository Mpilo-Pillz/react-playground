import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Auth/Login/Login";
import { logOut } from "../../store/slice/authSlice";
import { RootState } from "../../store/store";
import useRouting from "../../hooks/useRouting";

const useAuth = () => {
  const dispatch = useDispatch();
  const { navigate } = useRouting();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    navigate(Login.route);
  };
  return { isLoggedIn, handleLogout };
};

export default useAuth;
