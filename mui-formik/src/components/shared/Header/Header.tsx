import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
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
import useShared from "../hooks/useShared";

const Header = () => {
  const {
    isLoggedIn,
    anchorEl,
    handleMenu,
    handleClose,
    handleNavItemClicked,
  } = useHeader();
  const { logout } = useLogin();
  const { navigate } = useShared();
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
          <Link style={{ color: "inherit", textDecoration: "none" }} to={"/"}>
            Home Utility Management
          </Link>
        </Typography>

        {isLoggedIn ? (
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
              <Box>
                <MenuItem onClick={logout}>Logout</MenuItem>
                <MenuItem onClick={() => handleNavItemClicked("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => handleNavItemClicked("/account")}>
                  My Account
                </MenuItem>
                <MenuItem onClick={() => handleNavItemClicked("/address")}>
                  Add Address
                </MenuItem>
              </Box>
            </Menu>
          </div>
        ) : (
          <>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
