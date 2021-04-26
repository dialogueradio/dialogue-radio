import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className="md:rounded-md"
      src={url}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
