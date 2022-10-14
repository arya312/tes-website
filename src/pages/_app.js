import { createTheme, ThemeProvider } from '@mui/material';
import '../css/globals.css'
import MainLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
    const theme = createTheme({
        typography: {
            fontFamily: "Montserrat"
        }
    });

    return <ThemeProvider theme={theme}>
        {Component.layout ? <Component.layout><Component {...pageProps} /></Component.layout> : 
                Component.layout === false ? <Component {...pageProps} /> : <MainLayout><Component {...pageProps} /></MainLayout>}
    </ThemeProvider>;
}

export default MyApp
