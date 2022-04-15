import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import Navigation from "../../components/nav";
import React from "react";

export default function Index({ allPosts }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <div>
            <Navigation/>
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
            <Container>
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </div>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}