import React from "react";
import Head from "next/head";
import Navigation from "../../components/nav";
import GalleryPageContent from "../../components/gallery-page";
import Footer from "../../components/Footer";
import { galleries } from "../../galleries/galleries";

function GalleryPage({ page }) {
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
        <GalleryPageContent page={ page }/>
        <Footer/>
    </div>
}

export default GalleryPage

export async function getStaticProps({ params: { name } }) {
    return { props: { page: galleries[name] } };
}

export async function getStaticPaths() {
    const paths = Object.keys(galleries).map((c) => {
        return { params: { name: c } };
    });

    return {
        paths,
        fallback: false,
    };
}
