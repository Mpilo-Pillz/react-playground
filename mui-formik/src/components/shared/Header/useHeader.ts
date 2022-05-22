import React from "react";
import useStore from "../../../store/store";

const useHeader = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { isLoggedIn, anchorEl, handleMenu, handleClose };
};

export default useHeader;
