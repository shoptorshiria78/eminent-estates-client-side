
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CampaignIcon from '@mui/icons-material/Campaign';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import useAdmin from '../../Hooks/useAdmin';
import useMember from '../../Hooks/useMember';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DashboardLayOut() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {/* main list item has to be added */}
                        {
                            isAdmin
                                ? <>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Admin Profile" />
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Manage Members" />
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CampaignIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Make Announcement" />
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FormatListBulletedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Agreement Request" />
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AttachMoneyIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Manage Coupons" />
                                    </ListItemButton>
                                </> :

                                isMember ?
                                    <>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DashboardIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="My Profile" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <AttachMoneyIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Make Payment" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <FormatListBulletedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Payment History" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CampaignIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Announcement" />
                                        </ListItemButton>
                                    </> : <>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DashboardIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="My Profile" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CampaignIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Announcement" />
                                        </ListItemButton>
                                    </>
                        }

                        <Divider sx={{ my: 1 }} />

                        {/* secondary list items to be added */}
                        <ListItemButton>
                           
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <Link href="/" underline="none" color="inherit">
                                <ListItemText primary="Home" />
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ApartmentIcon />
                            </ListItemIcon>
                            <Link href="/apartment" underline="none" color="inherit">
                            <ListItemText primary="Apartment" />
                            </Link>
                        </ListItemButton>

                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >


                                    {/*outlet should be here*/}


                                </Paper>
                            </Grid>

                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}