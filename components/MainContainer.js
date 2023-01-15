import  Header  from './Header'
import { Footer } from './Footer'

export function MainContainer({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}