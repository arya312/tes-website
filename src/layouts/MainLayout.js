import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from '../images/logo-circle.png';

export default function MainLayout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href={icon.src} /> 
               
                <meta name="description" content="A Community for Everything You Can Imagine - The Everything Server." />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}