import React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Link,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { MenuItem } from "@mui/material";

import MenuComponent from "./MenuComponent.jsx";
const Navbar = () => {
  const pages = ["Home", "About", "Contact", "Projects"];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="fixed" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl" sx={{ color: "white" }}>
        <Toolbar sx={{ display: { md: "flex" } }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GB
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "Block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  href={`${page}`}
                  underline="none"
                  color="inherit"
                >
                  <MenuItem onClick={handleCloseNavMenu}>{page}</MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GB
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex", alignItems: "center" },
              mr: 5,
            }}
          >
            {pages.map((page) => (
              <Link
                href={`${page}`}
                underline="none"
                color="inherit"
                key={page}
                sx={{
                  mr: 3,
                  fontWeight: 700,
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                  textDecoration: "none",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>

          <MenuComponent />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
