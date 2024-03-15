import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ top: 0, background: "#2E3B55", zIndex: 999 }}
      >
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "red",
                textDecoration: "none",
              }}
            >
              Pokédex
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to="/"
                    textAlign="center"
                    sx={{
                      fontWeight: 700,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Debut
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to="/gen9"
                    textAlign="center"
                    sx={{
                      fontWeight: 700,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Paldean-Dex
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography
                    component={Link}
                    to="/add"
                    textAlign="center"
                    sx={{
                      fontWeight: 700,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Add Pokemon
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "red",
              }}
            >
              Pokédex
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 4,
                  ml: 4,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Debut
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/gen9"
                sx={{
                  mr: 4,
                  ml: 4,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Paldean-Dex
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/add"
                sx={{
                  mr: 4,
                  ml: 4,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Add Pokemon
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default TopBar;
