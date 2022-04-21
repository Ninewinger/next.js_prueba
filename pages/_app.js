import Layout from "../components/Layout"

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <h1>Hola</h1>
            <Component {...pageProps} />
        </Layout>
    )
};