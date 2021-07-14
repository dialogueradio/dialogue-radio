import Avatar from '../components/avatar'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  author,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a>
        <div className="flex flex-col justify-between p-4 bg-white rounded-lg duration-150 hover:shadow-xl">
          <div>
            <div className="mb-5">
              <CoverImage slug={slug} title={title} url={coverImage.url} />
            </div>
            <h3 className="mb-3 text-xl font-bold leading-snug">
                {title}
            </h3>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray1">
            <Avatar name={author.name} picture={author.picture.url} />
            <p className="text-sm font-bold text-gray3">{date}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
