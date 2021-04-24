import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-3xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-lg">
          <p className="text-base font-bold text-gray3">{date}</p>
        </div>
      </div>
    </>
  )
}
