import React from "react";
import Head from "next/head";
import PostHeader from "./post-header";
import PostBody from "./post-body";

function BlogSingle({post}) {
    return <div>
        <article className="mb-32">
            <div className="pt-16"/>
            <Head>
                <title>
                    {post.title} | Murat Yuksel
                </title>
                <meta property="og:image" content={post.ogImage.url}/>
            </Head>
            <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
            />
            <PostBody content={post.content}/>
        </article>
    </div>
}

export default BlogSingle
