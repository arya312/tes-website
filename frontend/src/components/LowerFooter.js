import styles from '../css/Footer.module.css';
import Logo from './Logo';
import { FaDiscord, FaEnvelope, FaHammer } from 'react-icons/fa';
import { INVITE_URL, MAILBOT_URL } from '../config';

export default function LowerFooter() {
    return (
        <footer className="bg-[#202020] pb-5 pt-3 px-3 text-gray-400 relative">
            <div className="grid md:flex items-start gap-3 justify-evenly">
                <div className='order-last md:order-first pt-3'>
                    <Logo />
                    <div className='text-lg md:text-2xl text-white'>The Everything Server</div>
                    <p><a href='mailto:support@tesworld.eu.org' className='link'>support@tesworld.eu.org</a></p>
                    <hr className='border-t border-t-[#450] my-3' />
                    <p>Copyright &copy; {new Date().getFullYear()} The Everything Server and <a className="link" href="https://github.com/onesoft-sudo/tes-website/graphs/contributors">All Contributors</a>, all rights reserved.</p>

                    <br />

                    <ul className={styles.iconLinks}>
                        <li><a title='The Everything Server Invite' href={INVITE_URL} className={styles.discordIcon}><FaDiscord /></a></li> 
                        <li><a title='Support Email' className={styles.emailIcon} href="mailto:support@tesworld.eu.org"><FaEnvelope /></a></li> 
                        <li><a title='Send Punishment Appeal via MailBot' className={styles.hammerIcon} href={MAILBOT_URL}><FaHammer /></a></li> 
                    </ul>
                </div>
            </div>
        </footer>
    );
}
