import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    );
}