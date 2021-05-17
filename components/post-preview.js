import Avatar from '../components/avatar'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a>
        <div className="flex flex-col justify-between bg-white rounded-lg p-4 duration-150 hover:shadow-xl">
          <div>
            <div className="mb-5">
              <CoverImage slug={slug} title={title} url={coverImage.url} />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-snug">
                {title}
            </h3>
            <p className="mb-4 text-base leading-relaxed">{excerpt}</p>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray1">
            <Avatar name={author.name} picture={author.picture.url} />
            <p className="text-sm font-bold text-gray3">{date}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
