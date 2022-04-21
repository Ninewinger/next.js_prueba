import LayoutStyles from '../styles/Layout.module.css';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={LayoutStyles.container}>
                <main className={LayoutStyles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    );
}