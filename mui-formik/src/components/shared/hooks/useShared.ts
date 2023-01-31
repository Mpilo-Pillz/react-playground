import { useNavigate } from "react-router-dom";

const useShared = () => {
  const navigate = useNavigate();

  return { navigate };
};

export default useShared;
