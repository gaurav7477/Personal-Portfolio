import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Link,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { MenuItem } from "@mui/material";
const Navbar = () => {
  const pages = ["Home", "About", "Contact", "Projects"];
  const settings = ["Profile", "Account","Contact Me"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (e)=> {
    setAnchorElUser(e.currentTarget);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  return (
    <AppBar position="fixed" sx={{bgcolor:"black"}}>
      <Container maxWidth="xl" sx={{color:'white'}}>
        <Toolbar sx={{ display: { md: "flex" } }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
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
                <Link key={page} href={`${page}`} underline="none" color="inherit">
                  <MenuItem onClick={handleCloseNavMenu}>{page}</MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            LOGO
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {settings.map((setting) => (
              <Link
              onClick={handleCloseUserMenu}
                key={setting}
                href={`#${setting}`}
                underline="none"
                color="inherit"
                sx={{
                  display: "block",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                  textDecoration: "none",
                }}
              >
                {setting}
              </Link>
            ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
