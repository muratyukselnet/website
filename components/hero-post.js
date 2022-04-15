import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Avatar from "../components/avatar";
import Link from 'next/link'

export default function HeroPost({
                                     title,
                                     coverImage,
                                     date,
                                     excerpt,
                                     author,
                                     slug,
                                 }) {
    return (
        <section className="pt-20">
            <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link href={`/blog/${slug}`}>
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                    <Avatar name={author.name} picture={author.picture} />
                </div>
            </div>
        </section>
    )
}