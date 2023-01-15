import Layout from '../components/layout'
import styled from 'styled-components';
import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  return  (
    <div>
      <Layout >
        <Component  {...pageProps} />
      </Layout>
    </div>
    
  )
  
}

export default MyApp
