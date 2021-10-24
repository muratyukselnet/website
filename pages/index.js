import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Education from "../components/education";
import Experience from "../components/experience";
import Gallery from "../components/gallery";
import Aboutme from "../components/aboutme";
import Head from "next/head";
import Navigation from "../components/nav";

function HomePage() {
    return <div>
        <Head>
            <title>Murat Yüksel</title>
            <meta name="title" content="Murat Yüksel" />
            <meta name="author" content="Murat Yüksel" />
            <meta name="description" content="Murat Yüksel - Software Developer - Tech Stack: PHP, Laravel, Symfony, Linux Bash, Redis, Git, NodeJS, MongoDB, Java, REST, SOAP, Varnish, RabbitMQ " />
            <meta name="keywords" content="murat yüksel, murat, yüksel, software, developer, development, yazılım, programlama, bilgisayar, computer, backend, php, web" />
            <link rel="image_src" type="image/jpeg" href="https://www.muratyuksel.net/images/muratyuksel.png" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script src="/ga.js" async />
        </Head>
        <Navigation/>
        <Header/>
        <Experience/>
        <Education/>
        <Aboutme/>
        <Gallery/>
        <Footer/>
    </div>
}

export default HomePage