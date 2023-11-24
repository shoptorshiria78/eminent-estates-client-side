import { createTheme, ThemeProvider } from '@mui/material/styles';
const themeColor = createTheme({
    palette:{
        primary:{
            main:'#023e8a',
            contrastText:'white'
        },
        secondary:{
            main:'#0096c7',
            contrastText:'white'
        }
        
    }
})

const WebTheme = ({children}) => {
    return(
        <ThemeProvider theme={themeColor}>
            {children}
        </ThemeProvider>
    )
};

export default WebTheme;