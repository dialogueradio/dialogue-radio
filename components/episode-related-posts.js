import CoverImage from './cover-image'
import Link from 'next/link'

export default function EpisodeHostGuest({ relatedPosts }) {
  return (
    <div>
      {relatedPosts.map((relatedPost) => (
        <div className="flex">
          <div className="w-2/4">
            <CoverImage slug={relatedPost.slug} title={relatedPost.title} url={relatedPost.coverImage.url} />
          </div>
          <div className="w-3/4 ml-4 md:ml-7">
            <h3 className="md:my-2 text-base md:text-xl font-bold leading-snug">
              <Link as={`/posts/${relatedPost.slug}`} href="/posts/[slug]">
                <a className="hover:underline">{relatedPost.title}</a>
              </Link>
            </h3>
            <p className="mb-4 text-sm md:text-base leading-relaxed">{relatedPost.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  ) 
}
