import Layout from '../components/layout'
import styled from 'styled-components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
