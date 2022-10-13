import logo from '../images/logo.jpg';

export default function Logo({ height = 40, width = 40, className, ...props }) {
    return <img src={logo.src} className={`rounded ${className}`} height={height} width={width} {...props} />;
}