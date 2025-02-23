import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Services', path: '/services' },
  { name: 'Tarifs', path: '/pricing' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Soumettre un projet', path: '/submit-project' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    handleCloseNavMenu();
    navigate(path);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'center' }}>
          {/* Logo et titre pour les écrans larges */}
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Don's Record
          </Typography>

          {/* Menu burger pour mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Titre pour mobile */}
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            Don's Record
          </Typography>

          {/* Menu pour les écrans larges */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
