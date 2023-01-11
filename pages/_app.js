import '../styles/style.css'
import PageHeader from '../components/page-header';
import { contextApiKey } from '../context/context';



function MyApp({ Component, pageProps }) {
  const apiKey = '43090d0ed080a422f191b4b3db131431'

  return (
    <contextApiKey.Provider value={apiKey}>
      <PageHeader />
      <Component {...pageProps} />
    </contextApiKey.Provider>
  )
}

export default MyApp
