import * as React from 'react'
import Layout from "../components/Layout";
import "../style/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
          <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
