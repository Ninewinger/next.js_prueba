import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/" className={navStyles.link}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}