import styles from '../css/Footer.module.css';
import Logo from './Logo';
import { FaDiscord, FaEnvelope, FaHammer } from 'react-icons/fa';
import { INVITE_URL, MAILBOT_URL } from '../config';

export default function Footer() {
    return (
        <footer className="bg-[#202020] pb-5 pt-3 px-3 text-gray-400 relative">
            <div className="grid md:flex items-start gap-3 justify-evenly">

                <div>
                    <br className='md:hidden' />

                    <h3 className='text-xl md:text-2xl text-white mb-2'>About</h3>

                    <ul className={styles.listColumn}>
                        <li><a className="link" title="Disboard" href='https://disboard.org/server/959235580770807898'>Disboard</a></li>
                        <li><a className="link" title="Top.GG" href='https://top.gg/servers/959235580770807898'>Top.GG</a></li>
                        <li><a className="link" title="Email" href='mailto:support@tesworld.eu.org'>Email</a></li>
                        <li><a className="link" title="Feedback" href='mailto:feedback@tesworld.eu.org'>Feedback</a></li>
                    </ul>
                </div>

                <div>
                    <br className='md:hidden' />

                    <h3 className='text-xl md:text-2xl text-white mb-2'>Resources</h3>

                    <ul className={styles.listColumn}>
                        <li><a className='link' title="Rules" href='https://discord.com/channels/959235580770807898/959250202835955842'>Server Rules</a></li>
                        <li><a className='link' title="Apply for Staff" href='https://discord.com/channels/959235580770807898/965489848699981864'>Staff Application</a></li>
                        <li><a className='link' title="Events Team Application" href='https://discord.com/channels/959235580770807898/964043910408187924'>News Team Application</a></li>
                        <li><a className='link' title="News Team Application" href='https://discord.com/channels/959235580770807898/964771891032244274'>Events Team Application</a></li>
                        <li><a className='link' title="Make a partnership" href='mailto:partnerships@tesworld.eu.org'>Partnerships</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
