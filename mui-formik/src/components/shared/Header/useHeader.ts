import React, { useCallback } from "react";
import useStore from "../../../store/store";
import useShared from "../hooks/useShared";

const useHeader = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { navigate } = useShared();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = useCallback(
    (route: string) => {
      navigate(route);
    },
    [navigate]
  );

  const handleNavItemClicked = useCallback((route: string) => {
    handleNavigate(route);
    handleClose();
  }, []);

  return {
    isLoggedIn,
    anchorEl,
    handleMenu,
    handleClose,
    handleNavItemClicked,
  };
};

export default useHeader;
