

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

function Copyright() {
    return (
        <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link  href="https://mui.com/">
                Eminent Estates
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
    return (
        <ThemeProvider  theme={defaultTheme}>
            
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: '4',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">

                        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 500, mx: 2, color: '#3081D0' }} variant="h6" >About us</Typography>
                            <Typography sx={{ fontWeight: 500, mx: 2, color: '#3081D0' }} variant="h6" >Contact</Typography>
                            <Typography sx={{ fontWeight: 500, mx: 2, color: '#3081D0' }} variant="h6">Our Features</Typography>
                            <Typography sx={{ fontWeight: 500, mx: 2, color: '#3081D0' }} variant="h6">Our Policy</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my:4 }}>
                            <FacebookIcon sx={{ fontWeight: 500, mx: 2, color: '#3081D0' }} variant="h6" />
                            <TwitterIcon sx={{ fontWeight: 500, mx: 2, color: '#3081D0' }} variant="h6"/>
                            <GoogleIcon sx={{ fontWeight: 500, mx: 2, color: '#3081D0' }} variant="h6"/>
                        </Grid>
                        <Typography sx={{ textAlign: 'center', my: 3, color: '#3081D0' }} variant="body1">
                            Eminent Estates Ltd.
                        </Typography>

                        <Copyright  />
                    </Container>
                </Box>
            
        </ThemeProvider>
    );
}