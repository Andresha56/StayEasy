import logo from "../../../assets/images/Nav/logo.svg";
import "./Nav.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { theme } from "../../../style/theme/Theme";

const pages = ['Products', 'Pricing', 'Blog'];
const pagesForSmallDevice = ['Products','Pricing','Sign up','Sign In'];

export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none", mb:'2rem'}}>
      <Container>
        <Toolbar disableGutters className="header-logo">
        <a href="/"><img src={logo} alt='logo'/></a>
          {/* -----Nav---logo----- */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            color={theme.palette.primary.main}
            sx={{
              mr: 2,
              flexGrow: 1,
              textDecoration: 'none',
              fontSize:'22px',
              fontWeight:"bolder",
              marginLeft:"-9px",
              '&:hover':{
                color:theme => theme.palette.primary.main,
              }
            }}
          >
            MakeMyTrip
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr:2, ml:2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 ,display: { xs: 'none', md: 'flex' },}}>
            <Tooltip>
              <Button>Sign In</Button>
              <Button className="active">Sign up</Button>
            </Tooltip>
          </Box>
          {/* ---------nav---menu------- */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: "row-reverse" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            {/* -----pages---- */}
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
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pagesForSmallDevice.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
