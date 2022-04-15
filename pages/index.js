import React from "react";
import Head from "next/head";
import Navigation from "../components/nav";
import Header from "../components/Header"
import Experience from "../components/experience";
import Education from "../components/education";
import Aboutme from "../components/aboutme";
import Photography from "../components/photography";
import Footer from "../components/Footer";

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
        <Experience/>
        <Education/>
        <Aboutme/>
        <Photography/>
        <Footer/>
    </div>
}

export default HomePage