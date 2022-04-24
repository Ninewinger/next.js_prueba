import Layout from "../components/Layout"
import "../styles/styles.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <h1>Hola</h1>
            <Component {...pageProps} />
        </Layout>
    )
};