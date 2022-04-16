import React from "react";
import Head from "next/head";
import Navigation from "../../components/nav";
import Header from "../../components/header"
import Experience from "../../components/experience";
import Education from "../../components/education";
import Aboutme from "../../components/aboutme";
import Photography from "../../components/photography";
import Footer from "../../components/footer";

function HomePage() {
    return <div>
        <Head>
            <title>Murat Yüksel</title>
            <meta name="title" content="Murat Yüksel"/>
            <meta name="author" content="Murat Yüksel"/>
            <meta name="description"
                  content="Murat Yüksel - Software Developer - Tech Stack: PHP, Laravel, Symfony, Linux Bash, Redis, Git, NodeJS, MongoDB, Java, REST, SOAP, Varnish, RabbitMQ "/>
            <meta name="keywords"
                  content="murat yüksel, murat, yüksel, software, developer, development, yazılım, programlama, bilgisayar, computer, backend, php, web"/>
            <link rel="image_src" type="image/jpeg" href="https://www.muratyuksel.net/images/muratyuksel.png"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <script src="/ga.js" async/>
        </Head>
        <Navigation/>
        <Header/>
        <div>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-white">
            <nav className="md:ml-auto flex flex-wrap text-base justify-center">
                <a className="mr-5 hover:text-gray-900" href="/#experience">Experience</a>
                <a className="mr-5 hover:text-gray-900" href="/#education">Education</a>
                <a className="mr-5 hover:text-gray-900" href="/#aboutme">About Me</a>
                <a className="mr-5 hover:text-gray-900" href="/#photography">Photography</a>
            </nav>
        </div>
        </div>
        <Experience/>
        <Education/>
        <Aboutme/>
        <Photography/>
        <Footer/>
    </div>
}

export default HomePage