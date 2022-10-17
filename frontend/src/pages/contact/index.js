import Head from "next/head";
import { Button } from "@mui/material";
import Link from "next/link";
import { MAILBOT_URL } from "../../config";
import styled from "@emotion/styled";
import { INVITE_URL, THEME_COLOR, THEME_COLOR_DARKER } from "../../config";


export default function Contact() {
    const  NavButton = styled(Button)({
        minWidth: `20px`,
        overflow: 'hidden',
        color: THEME_COLOR
        
    });
    const ControlButton = styled(Button)({
        color: THEME_COLOR,
        outlineColor: THEME_COLOR,
        borderColor: THEME_COLOR,
        ":hover": {
            borderColor: THEME_COLOR_DARKER
        }
    });
    return (
        <>
            <Head>
                <title>Contact Us - The Everything Server</title>
            </Head>

            <div className="h-[80vh] p-5 md:px-[20%]">
                <h1 className="text-2xl md:text-3xl">Contact Us</h1>
                <br />

                <p>You may contact us using the following methods:</p>
                <br />
                <br />
                <div className="ml-auto flex items-center justify-center md:block">
                    <div><a className="link" href="mailto:support@tesworld.eu.org" target="_blank" rel="noreferrer" ><ControlButton variant="outlined">Email Support</ControlButton></a></div>
                    <br />
                    <div><a className="link" href="mailto:webmaster@tesworld.eu.org" target="_blank" rel="noreferrer"><ControlButton variant="outlined">Email Webmaster</ControlButton></a></div>
                    <br />
                    <div><a className="link" href={MAILBOT_URL} target="_blank" rel="noreferrer"><ControlButton variant="outlined">MailBot</ControlButton></a></div>
                    <br />
                    <div><Link href="/contact/form"><a href="https://top.gg/servers/959235580770807898/vote" className="link" target="_blank" rel="noreferrer"><ControlButton variant="outlined">Contact Form</ControlButton></a></Link></div>
                </div>
            </div>
        </>
    );
}
