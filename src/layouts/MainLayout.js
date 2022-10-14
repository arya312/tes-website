import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
    return (
        <div>
            <Head>
                {/* 
                When favicon is added, uncomment this and update the href value

                <link rel="icon" href="/favicon.ico" /> 
                */}
                <meta name="description" content="A Community for Everything You Can Imagine - The Everything Server." />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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