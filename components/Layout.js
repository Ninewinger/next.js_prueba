import LayoutStyles from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={LayoutStyles.container}>
            <main className={LayoutStyles.main}>{children}</main>
        </div>
    );
    }