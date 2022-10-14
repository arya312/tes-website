import styles from '../css/Footer.module.css';
import Logo from './Logo';
import { FaDiscord, FaEnvelope, FaHammer } from 'react-icons/fa';
import { INVITE_URL } from '../config';

export default function Footer() {
    return (
        <footer className="bg-[#202020] pb-5 pt-3 px-3 text-gray-400">
            <div className="grid md:flex items-start gap-3 justify-evenly">
                <div className='order-last md:order-first pt-3'>
                    <Logo />
                    <div className='text-lg md:text-2xl text-white'>The Everything Server</div>
                    <p><a href='mailto:support@tesworld.eu.org' className='hover:underline'>support@tesworld.eu.org</a></p>
                    <hr className='border-t border-t-[#444] my-3' />
                    <p>Copyright &copy; The Everything Server {new Date().getFullYear()}, all rights reserved.</p>

                    <br />

                    <ul className={styles.iconLinks}>
                        <li><a title='The Everything Server Invite' href={INVITE_URL} className={styles.discordIcon}><FaDiscord /></a></li> 
                        <li><a title='Support Email' className={styles.emailIcon} href="mailto:support@tesworld.eu.org"><FaEnvelope /></a></li> 
                        <li><a title='Send Punishment Appeal' className={styles.hammerIcon} href='https://discordapp.com/channels/@me/959683777804767252'><FaHammer /></a></li> 
                    </ul>
                </div>

                <div>
                    <br className='md:hidden' />

                    <h3 className='text-xl md:text-2xl text-white mb-2'>About</h3>

                    <ul className={styles.listColumn}>
                        <li><a title="Disboard" href='https://disboard.org/server/959235580770807898'>Disboard</a></li>
                        <li><a title="Top.GG" href='https://top.gg/servers/959235580770807898'>Top.GG</a></li>
                        <li><a title="Email" href='mailto:support@tesworld.eu.org'>Email</a></li>
                        <li><a title="Feedback" href='mailto:feedback@tesworld.eu.org'>Feedback</a></li>
                    </ul>
                </div>

                <div>
                    <br className='md:hidden' />

                    <h3 className='text-xl md:text-2xl text-white mb-2'>Contact</h3>

                    <ul className={styles.listColumn}>
                        <li><a title="Rules" href='https://discord.com/channels/959235580770807898/959250202835955842'>Server Rules</a></li>
                        <li><a title="Apply for Staff" href='https://discord.com/channels/959235580770807898/965489848699981864'>Staff Application</a></li>
                        <li><a title="Events Team Application" href='https://discord.com/channels/959235580770807898/964043910408187924'>News Team Application</a></li>
                        <li><a title="News Team Application" href='https://discord.com/channels/959235580770807898/964771891032244274'>Events Team Application</a></li>
                        <li><a title="Make a partnership" href='mailto:partnerships@tesworld.eu.org'>Partnerships</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}