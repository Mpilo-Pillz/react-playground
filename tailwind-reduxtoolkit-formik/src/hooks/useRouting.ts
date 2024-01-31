import { useNavigate } from "react-router-dom";

const useRouting = () => {
  const navigate = useNavigate();

  return { navigate };
};

export default useRouting;
