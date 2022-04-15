export default function CoverImage({ title, src, slug, height, width }) {
    const image = (
        <img
            src={src}
            alt={`${title}`}
            className="shadow-sm m-auto"
            width={width}
            height={height}
        />
    )
    return (
        <div className="w-full">
            {image}
        </div>
    )
}