import React from "react";
import { Link } from "react-router-dom";
import logo from "..//assests/images/Logo.png";
import Button from "@mui/material/Button";
import { MdOutlineMenuOpen, MdOutlineLightMode } from "react-icons/md";
import { FaGlobe, FaShoppingCart, FaBell } from "react-icons/fa";
import { MdForwardToInbox } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { FaShieldAlt } from "react-icons/fa";


import Searchbox from "./Searchbox";
import profile from "../assests/images/profile.jpg";

export default function Navbar() {
  
  // CART MENU STATE
  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const openCart = Boolean(anchorElCart);

  const handleCartOpen = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorElCart(null);
  };

  // ACCOUNT MENU STATE
  const [anchorElAcc, setAnchorElAcc] = React.useState(null);
  const openAcc = Boolean(anchorElAcc);

  const handleAccOpen = (event) => {
    setAnchorElAcc(event.currentTarget);
  };

  const handleAccClose = () => {
    setAnchorElAcc(null);
  };

  return (
    <header className="bg-white shadow-sm py-2">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          
          {/* Left Logo */}
          <div className="col-2 col-md-2 d-flex gap-5 align-items-center part1 px-5">
            <Link to="/" className="text-decoration-none">
              <img src={logo} alt="logo" className="img-fluid" style={{ maxWidth: "70px" }} />
            </Link>

            <Button variant="outlined" className="ms-3 rounded-5 border-0">
              <MdOutlineMenuOpen className="buttonopen" />
            </Button>
          </div>

          {/* Search */}
          <div className="col-3 col-md-3 d-flex align-items-center">
            <Searchbox />
          </div>

          {/* Right Section */}
          <div className="col-7 col-md-7 d-flex justify-content-end gap-1 align-items-center">

            <Button variant="outlined" className="rounded-5 border-0">
              <MdOutlineLightMode className="buttonopen" />
            </Button>

            <Button variant="outlined" className="rounded-5 border-0">
              <FaGlobe className="buttonopen" />
            </Button>

            {/* CART BUTTON */}
            <Button variant="outlined" className="rounded-5 border-0" onClick={handleCartOpen}>
              <FaShoppingCart className="buttonopen" />
            </Button>

            {/* CART MENU */}
            <Menu
              anchorEl={anchorElCart}
              open={openCart}
              onClose={handleCartClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  mt: 1.5,
                  overflow: "visible",
                },
              }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <MenuItem onClick={handleCartClose}>No items in cart</MenuItem>
              <MenuItem onClick={handleCartClose}>No items in cart</MenuItem>
            </Menu>

            <Button variant="outlined" className="rounded-5 border-0">
              <MdForwardToInbox className="buttonopen" />
            </Button>

            <Button variant="outlined" className="rounded-5 border-0">
              <FaBell className="buttonopen" />
            </Button>
            {/* notification */}
            <Menu
  anchorEl={anchorElAcc}
  id="notifictaion"
  open={openAcc}
  onClose={handleAccClose}
  PaperProps={{
    elevation: 0,
    sx: {
      mt: 1.5,
      overflow: "visible",
      width: 240,
    },
  }}
  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  transformOrigin={{ horizontal: "right", vertical: "top" }}
>

  {/* 🔵 PROFILE HEADER INSIDE DROPDOWN */}
  <div className="d-flex align-items-center px-3 py-2">
    <img
      src={profile}
      alt="User"
      className="rounded-circle"
      style={{
        width: "45px",
        height: "45px",
        border: "2px solid #1976d2",
        padding: "2px",
      }}
    />

    <div className="ms-2">
      <div className="fw-bold">Lakshay Panchal</div>
      <div className="text-muted" style={{ fontSize: "12px" }}>
        Admin
      </div>
    </div>
  </div>

  <Divider />

  <MenuItem onClick={handleAccClose}>
    <ListItemIcon>
      <PersonAdd fontSize="small" />
    </ListItemIcon>
    My account
  </MenuItem>

  <MenuItem onClick={handleAccClose}>
    <ListItemIcon>
      <FaShieldAlt fontSize="small" />
    </ListItemIcon>
    Reset password
  </MenuItem>

  <MenuItem onClick={handleAccClose} style={{color:"red"}}>
    <ListItemIcon>
      <Logout fontSize="small" style={{color:"red"}} />
    </ListItemIcon>
    Logout
  </MenuItem>
</Menu>

            {/* ACCOUNT SECTION CLICK */}
            <div className="myacc d-flex align-items-center" onClick={handleAccOpen} style={{ cursor: "pointer" }}>
              <div className="userimg">
                <img
                  src={profile}
                  alt="User"
                  className="img-fluid rounded-circle"
                  style={{ width: "40px", height: "40px", border: "1px solid blue", padding: "2px" }}
                />
              </div>

              <div className="userinfo d-flex flex-column align-items-start justify-content-center ms-2">
                <span className="username fw-bold">Lakshay Panchal</span>
                <span className="userrole text-muted" style={{ fontSize: "12px" }}>
                  Admin
                </span>
              </div>
            </div>

            {/* ACCOUNT MENU */}
           {/* ACCOUNT MENU */}
<Menu
  anchorEl={anchorElAcc}
  open={openAcc}
  onClose={handleAccClose}
  PaperProps={{
    elevation: 0,
    sx: {
      mt: 1.5,
      overflow: "visible",
      width: 240,
    },
  }}
  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  transformOrigin={{ horizontal: "right", vertical: "top" }}
>

  {/* 🔵 PROFILE HEADER INSIDE DROPDOWN */}
  <div className="d-flex align-items-center px-3 py-2">
    <img
      src={profile}
      alt="User"
      className="rounded-circle"
      style={{
        width: "45px",
        height: "45px",
        border: "2px solid #1976d2",
        padding: "2px",
      }}
    />

    <div className="ms-2">
      <div className="fw-bold">Lakshay Panchal</div>
      <div className="text-muted" style={{ fontSize: "12px" }}>
        Admin
      </div>
    </div>
  </div>

  <Divider />

  <MenuItem onClick={handleAccClose}>
    <ListItemIcon>
      <PersonAdd fontSize="small" />
    </ListItemIcon>
    My account
  </MenuItem>

  <MenuItem onClick={handleAccClose}>
    <ListItemIcon>
      <FaShieldAlt fontSize="small" />
    </ListItemIcon>
    Reset password
  </MenuItem>

  <MenuItem onClick={handleAccClose} style={{color:"red"}}>
    <ListItemIcon>
      <Logout fontSize="small" style={{color:"red"}} />
    </ListItemIcon>
    Logout
  </MenuItem>
</Menu>


          </div>
        </div>
      </div>
    </header>
  );
}
