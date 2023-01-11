//? Next
import Head from "next/head"
//? COMPONENTS
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Container from '../Container/Container'

export default function Layout({ children }) {

    return (

        <>
            <Head>
                {/* ADD LINK FOR FAVICON */}
                <title>Rick and Morty NEXT</title>
            </Head>
            <Navbar/>
            <Container>
            <main>{children}</main>
            </Container>
            <Footer/>
            
        </>

    )

}