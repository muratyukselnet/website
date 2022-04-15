import React from "react";
import Link from 'next/link'
import { galleries } from "../galleries/galleries";

function BlogMainContent() {
    const items = Object.keys(galleries).map((item) => (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"><Link href={ "/gallery/" + item}>
                    { galleries[item].title }
                </Link></h2>
                <p className="leading-relaxed">{ galleries[item].description.slice(0, 300) } ...</p>
            </div>
        </div>
    ));
    return <section className="text-gray-600 body-font overflow-hidden" id="experience">
        <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100 text-center">
                <div className="flex flex-col text-center w-full">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900">Galleries</h2>
                </div>
                { items }
            </div>
        </div>
    </section>
}

export default BlogMainContent
