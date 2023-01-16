import Image from "next/image";
import Head from "next/head";

import Navbar from "../components/Navbar";

import { AboutStyle } from "../styles/about/style";
import ImageIlustration from "../assets/DoogieDoodle.svg"


const About = () => {
    return(
        <>
            <Head>
                <title>About</title>
            </Head>
            <AboutStyle>
                <section className="section1">
                    <Navbar backgroundColor="none" />
                    <div className="box">
                        <h1>Who We Are</h1>
                        <div className="vector"></div>
                        <p>
                            We are a platform that makes it possible to search for several books.
                        </p>
                    </div>
                </section>
                <section className="section2">
                    <div>
                         <h2>
                            We believe that books are essential for changes, achievements and a better life.
                        </h2>
                        <p>
                            And with our experience, hard work and pride we open our platform to all kinds of projects and causes.
                        </p>
                    </div>
                    <Image src={ImageIlustration} alt="Image ilustrtion" />
                </section>
            </AboutStyle>
        </>
    )
}

export default About;