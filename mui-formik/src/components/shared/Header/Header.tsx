import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useHeader from "./useHeader";
import { Link } from "react-router-dom";
import useLogin from "../../auth/login/useLogin";

const Header = () => {
  const {
    isLoggedIn,
    anchorEl,
    handleMenu,
    handleClose,
    handleNavItemClicked,
  } = useHeader();
  const { logout } = useLogin();
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"}>Home Utility Management</Link>
        </Typography>

        {isLoggedIn && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {isLoggedIn ? (
                <Box>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={() => handleNavItemClicked("/account")}>
                    My Account
                  </MenuItem>
                </Box>
              ) : (
                <MenuItem onClick={logout}>Log in</MenuItem>
              )}
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
