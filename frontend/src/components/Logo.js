import Image from 'next/image';
import logo from '../images/logo.jpg';

export default function Logo({ height = 40, width = 40, className = "", ...props }) {
    return <Image src={logo.src} className={`rounded-full ${className}`} height={height} width={width} {...props} />;
}