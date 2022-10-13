import '../css/globals.css'
import MainLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
    return Component.layout ? <Component.layout><Component {...pageProps} /></Component.layout> : 
                Component.layout === false ? <Component {...pageProps} /> : <MainLayout><Component {...pageProps} /></MainLayout>;
}

export default MyApp
