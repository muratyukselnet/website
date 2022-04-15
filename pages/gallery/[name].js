import React from "react";
import Footer from "../../components/Footer";
import Head from "next/head";
import Navigation from "../../components/nav";
import GalleryPageContent from "../../components/gallery-page";
import {useRouter} from "next/router";

function GalleryPage() {
    const router = useRouter()
    const { name } = router.query

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
        <GalleryPageContent name={name}/>
        <Footer/>
    </div>
}

export default GalleryPage