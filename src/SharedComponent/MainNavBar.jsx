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
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




function MainNavBarNPM() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logOut } = useAuth()
  const navigate = useNavigate();

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
      .then(res=>{
        if(res){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "LogOut Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

 if(user){
  console.log(user.photoURL);
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
              
              <Button 
                onClick={handleCloseNavMenu}
                sx={{ mx: 4, color: 'white', display: 'block' }}
              >
                 <Link href='/'> Home </Link>
               
               
              </Button>
              <Button 
                onClick={handleCloseNavMenu}
                sx={{ mx: 4, color: 'white', display: 'block' }}
              >
                <Link href='/apartment'>Apartment</Link>
                
                
              </Button>
              <Button 
                onClick={handleCloseNavMenu}
                sx={{ mx: 4, color: 'white', display: 'block' }}
              >
                <Link href='/contact'>Contact Us</Link>
                
                
              </Button>
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
            
              <NavLink className={({ isActive }) =>
                        isActive ? " text-base bg-indigo-600 text-white px-5 py-3 rounded-xl " : " text-base bg-purple-400 text-white px-5 py-3 rounded-xl "} to='/'
                onClick={handleCloseNavMenu}
                style={{ marginRight: '1rem', color: 'white', display: 'block' }}
              >
               Home 
              </NavLink>
              <NavLink className={({ isActive }) =>
                        isActive ? " text-base bg-indigo-600 text-white px-5 py-3 rounded-xl " : " text-base bg-purple-400 text-white px-5 py-3 rounded-xl "} to='/apartment'
                onClick={handleCloseNavMenu}
                style={{ marginLeft: '1rem' , color: 'white', display: 'block' }}
              >
                Apartment
              </NavLink>
              <NavLink className={({ isActive }) =>
                        isActive ? " text-base bg-indigo-600 text-white px-5 py-3 rounded-xl " : " text-base bg-purple-400 text-white px-5 py-3 rounded-xl "} to='/contact'
                onClick={handleCloseNavMenu}
                style={{ marginLeft: '1rem' , color: 'white', display: 'block' }}
              >
                Contact Us
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
                    
                      <MenuItem>
                        <Typography textAlign="center" ><NavLink to='/dashboard'>DashBoard</NavLink></Typography>
                      </MenuItem>
                    

                  </Menu>
                </> : <Button variant="contained" color='secondary'><Link to='/login'>Log In</Link></Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainNavBarNPM;