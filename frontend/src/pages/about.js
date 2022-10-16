import { Button } from "@mui/material";
import Head from "next/head";
import { INVITE_URL } from "../config";

export default function About() {
    return (
        <div className="min-h-[80vh] py-5 px-5 md:px-[20%]">
            <Head>
                <title>About Us - The Everything Server</title>
            </Head>

            <h1 className="text-2xl md:text-3xl">About Us</h1>
            <br />

            <p>We're <span className="text-theme">TES</span> &mdash; <span className="text-theme">The Everything Server</span>, a community with active and friendly members for everything you can imagine.</p>
            <p>But some things are prohibited there as well. In the rules we've clearly describe what things aren't allowed.</p>

            <br />
            <p>
                In 1st April 2022, TES was created. We only had a few members. Only in 2 weeks we got over 100 members in our server. Now we have more members. From that to now, we're improving ourselves every time.
            </p>

            <br />
            <p>
                We need support from you guys &mdash; really. We'll be very glad you <a className="link" href={INVITE_URL}>join us</a>. Also <a className="link" href="https://top.gg/servers/959235580770807898/vote">a simple vote</a> would help us so much.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-5">
                <Button size="large" href={INVITE_URL} variant="outlined">Join Us</Button>
                <Button size="large" href="https://top.gg/servers/959235580770807898/vote" variant="outlined">Vote</Button>
                <Button size="large" href="/contact" variant="outlined">Contact</Button>
            </div>
        </div>
    );
}