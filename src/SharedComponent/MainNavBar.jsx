import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import useAuth from '../Hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';




function MainNavBarNPM() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logOut } = useAuth()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    console.log("hitted in logout")
    logOut()
      .then()
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <AppBar position="static">
      <Container color='primary' maxWidth="xl">
        <Toolbar disableGutters>
          <MapsHomeWorkIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: 50 }, mr: 2 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Eminent <br /> Estates
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              
              <NavLink to='/'
                onClick={handleCloseNavMenu}
                sx={{ mx: 4, color: 'white', display: 'block' }}
              >
               Home 
              </NavLink>
              <NavLink to='/apartment'
                onClick={handleCloseNavMenu}
                sx={{ mx: 4, color: 'white', display: 'block' }}
              >
                Apartment
              </NavLink>
            </Menu>
          </Box>
          <MapsHomeWorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Eminent Estates
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mx: 4 }}>
            
              <NavLink to='/'
                onClick={handleCloseNavMenu}
                sx={{ mx: 4, color: 'white', display: 'block' }}
              >
               Home 
              </NavLink>
              <NavLink to='/apartment'
                onClick={handleCloseNavMenu}
                sx={{ mx: 4, color: 'white', display: 'block' }}
              >
                Apartment
              </NavLink>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              user ?
                <> <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.photoURL} />
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
                    <MenuItem >
                      <Typography textAlign="center" >{user.displayName}</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogOut}>
                      <Typography textAlign="center" >Log Out</Typography>
                    </MenuItem>
                    <NavLink to='/dashboard'>
                      <MenuItem>
                        <Typography textAlign="center" >DashBoard</Typography>
                      </MenuItem>
                    </NavLink>

                  </Menu>
                </> : <Link to='/login'><Button variant="contained" color='secondary'>Log In</Button></Link>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainNavBarNPM;