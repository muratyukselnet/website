import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
    return (
        <div className="text-center">
            <div className="mb-8">
                <CoverImage title={title} src={coverImage} height={300} />
            </div>
            <PostTitle>{title}</PostTitle>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar name={author.name} picture={author.picture} />
                </div>
                <div className="mb-6 text-lg">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </div>
    )
}