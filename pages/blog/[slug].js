import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Footer from "../../components/footer";
import Navigation from "../../components/nav";
import BlogSingle from "../../components/blog-single";

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <div>
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
            {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
            ) : (
                <BlogSingle post={post}/>
            )}
            <Footer/>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}