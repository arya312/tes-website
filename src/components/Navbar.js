import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { MdMenu } from 'react-icons/md';
import { useState } from "react";
import styled from "@emotion/styled";
import { THEME_COLOR, THEME_COLOR_DARKER } from '../config';

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
        <nav className="md:flex items-center bg-theme md:px-[15%] py-2 md:m-0 block">
            <div class="flex md:block items-center">
                <div class="md:hidden pl-1">
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

            <div class={`${open ? '' : 'hidden'} md:flex items-center justify-between w-[100%]`}>
                <ul className="md:ml-10 md:flex items-center my-3 md:my-0">
                    {links.map(link => <li key={link.name} className="mx-2"><Link href={link.value}><a className={`block py-2 px-3 hover:bg-[#333] rounded ${(router.route === link.value || (/\#|\?/g.test(router.route) && router.route.startsWith(link.value))) ? 'bg-[#333] md:bg-[#252525] md:border-b-2 border-[#f14a60] text-[#f14a60] rounded-b-none' : ''}`} title={link.name}>{link.name}</a></Link></li>)}
                </ul>

                <div className="ml-auto flex items-center justify-center md:block">
                    <a href="https://discord.gg/tBf3Bx5Ghm" target="_blank" className="mr-2"><ControlButton variant="outlined">Join</ControlButton></a>
                    <Link href="/"><a><ControlButton variant="outlined">Login</ControlButton></a></Link>
                </div>
            </div>
        </nav>
    );
}   