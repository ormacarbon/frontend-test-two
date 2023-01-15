import  Header  from './Header'
import { Footer } from './Footer'
import NoSSR from 'react-no-ssr';

export function MainContainer({ children }) {
    return (
        <>
        <NoSSR>
            <Header />
            <div>{children}</div>
            <Footer />
        </NoSSR>
        </>
    )
}