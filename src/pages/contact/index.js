import Head from "next/head";
import Link from "next/link";
import { MAILBOT_URL } from "../../config";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - The Everything Server</title>
            </Head>

            <div className="h-[80vh] p-5 md:px-[20%]">
                <h1 className="text-2xl md:text-3xl">Contact Us</h1>
                <br />

                <p>You may contact us using the following methods:</p>
                
                <ul className="list-disc pl-5 pt-5">
                    <li><a className="link" href="mailto:support@tesworld.eu.org">Email Support</a></li>
                    <li><a className="link" href="mailto:webmaster@tesworld.eu.org">Email Webmaster</a>; (for problems related to this website)</li>
                    <li><a className="link" href={MAILBOT_URL}>Message via MailBot</a></li>
                    <li><Link href="/contact/form"><a className="link">Contact Form</a></Link></li>
                </ul>
            </div>
        </>
    );
}