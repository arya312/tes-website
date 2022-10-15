import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { THEME_COLOR } from '../config';

export default function _404() {
    const router = useRouter();
    const ref = useRef();

    useEffect(() => {
        ref.current.textContent = router.asPath;
    }, []);

    return (
        <div className="min-h-[80vh]">
            <Head>
                <title>404 Not Found - The Everything Server</title>
            </Head>

            <div className="px-3 md:px-[20%] block text-center py-5">
                <h1 className="text-3xl md:text-4xl"><span style={{ color: THEME_COLOR }}>404</span> Not Found</h1>
                <h3 className="text-xl md:text-2xl">Page not found!</h3>
                <br />

                <p className="pb-4 block">The requested URL <span className="font-mono bg-slate-400 text-black px-1 rounded" ref={ref}></span> was not found on this server.<br /><span style={{ color: '#999' }}>That's all we know.</span></p>
                
                <Link href="/"><a className="no-underline"><Button variant="text">Return to Home page</Button></a></Link>
            </div>
        </div>
    );
}