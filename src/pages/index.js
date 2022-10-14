import MainLayout from "../layouts/MainLayout";
import styles from '../css/Home.module.css';
import { INVITE_URL, THEME_COLOR } from "../config";

export default function Home() {
    return (
        <div className={styles.top}>
            <div className="text-center pt-5 md:pt-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl md:px-[30%] lg:leading-[3ch]">A Community for <span style={{ color: THEME_COLOR }}>Everything</span> You Can Imagine - <span style={{ color: THEME_COLOR }}>The Everything Server</span>.</h1>
                <br />
                <p className="pt-3 text-lg md:text-3xl">Friendly community - a server for every type of discussions!</p>
                <br className="md:hidden" />
                <div className="pt-5 md:pt-5 lg:pt-[60px]">
                    <a href={INVITE_URL} className="block md:inline-block hover:shadow-[0_0_2px_2px_#f14a60]  py-[12px] px-[24px] md:py-[15px] md:px-[30px] bg-[#cf394d] hover:bg-[#A83343] cursor-pointer rounded mx-2">Join Us</a>
                    <a className="mt-3 md:mt-0 block md:inline-block hover:shadow-[0_0_2px_2px_#f14a60] py-[12px] px-[24px] md:py-[15px] md:px-[30px] bg-[#cf394d] hover:bg-[#A83343] cursor-pointer rounded mx-2">About</a>
                </div>
            </div>
        </div>
    )
}

Home.layout = MainLayout;