import React from "react";
import { useState } from "react";
import { Avatar, Box, Link, Menu, Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import profileLogo from "../../images/abt.jpg";
const settings = ["About", "Contact"];

function MenuComponent() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={profileLogo} />
        </IconButton>
      </Tooltip>
      {/* 
                //TODO: Move This Menu Into a new Component
                //TODO: Add Contact me : Socials and Message me
                 */}
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <Link
            onClick={handleCloseUserMenu}
            key={setting}
            href={`${setting}`}
            underline="none"
            color="inherit"
            sx={{
              display: "block",
              fontWeight: 700,
              fontFamily: "monospace",
              letterSpacing: ".1rem",
              textDecoration: "none",
              p: 0.2,
            }}
          >
            {setting}
          </Link>
        ))}
      </Menu>
    </Box>
  );
}

export default MenuComponent;
