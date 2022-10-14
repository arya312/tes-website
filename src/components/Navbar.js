import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { MdClose, MdMenu } from 'react-icons/md';
import { useState } from "react";
import styled from "@emotion/styled";
import { INVITE_URL, THEME_COLOR, THEME_COLOR_DARKER } from '../config';
import styles from '../css/Navbar.module.css';

const links = [
    {
        name: "Home",
        value: '/'
    },
    {
        name: "About",
        value: '/about'
    },
    {
        name: "Contact",
        value: '/contact'
    }
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const NavButton = styled(Button)({
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
        <nav className="md:flex items-center bg-theme md:px-[15%] py-2 md:m-0 block z-[1000]">
            <div className="flex md:block items-center">
                <div className="md:hidden pl-1">
                    <NavButton onClick={() => setOpen(s => !s)}>
                        <MdMenu size={25} className="px-0" />
                    </NavButton>
                </div>

                <Link href="/">
                    <a className="inline-flex items-center md:flex md:my-2 mr-3 ml-2 md:mx-0">
                        <Logo className="rounded-md md:rounded" /> 
                        <div className="inline-block ml-2 font-bold md:w-[25ch]" style={{ color: THEME_COLOR }}>
                            <span className="hidden md:inline">The Everything Server</span>
                            <span className="md:hidden">TES</span>
                        </div>
                    </a>
                </Link>
            </div>

            <div className={`${open ? styles.open : styles.hidden} transition-[ease-in-out_0.5s] md:transition-none fixed top-0 z-50 h-[100vh] md:h-auto w-[80vw] bg-[#222] md:bg-transparent md:relative md:flex items-center justify-between md:w-[100%]`}>
                <div className="md:hidden mb-3 flex justify-end pt-2 pr-2">
                    <NavButton onClick={() => setOpen(false)}><MdClose size={25} /></NavButton>
                </div>

                <ul className="md:ml-10 md:flex items-center mt-3 mb-10 md:my-0">
                    {links.map(link => <li key={link.name} className="mx-2"><Link href={link.value}><a className={`block py-2 px-3 hover:bg-[#333] rounded ${(router.route === link.value || (/\#|\?/g.test(router.route) && router.route.startsWith(link.value))) ? 'bg-[#333] md:bg-[#252525] md:border-b-2 border-[#f14a60] text-[#f14a60] rounded-b-none' : ''}`} title={link.name}>{link.name}</a></Link></li>)}
                </ul>

                <div className="ml-auto flex items-center justify-center md:block">
                    <a href={INVITE_URL} target="_blank" rel="noreferrer" className="mr-2"><ControlButton variant="outlined">Join</ControlButton></a>
                    <a href="https://top.gg/servers/959235580770807898/vote" target="_blank" rel="noreferrer"><ControlButton variant="outlined">Vote</ControlButton></a>
                </div>
            </div>
        </nav>
    );
}   
