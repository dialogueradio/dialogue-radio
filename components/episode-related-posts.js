import CoverImage from './cover-image'
import Link from 'next/link'

export default function EpisodeHostGuest({ relatedPosts }) {
  return (
    <div>
      {relatedPosts.map((relatedPost) => (
        <div className="md:flex" key={relatedPost.title}>
          <div className="md:w-2/4">
            <CoverImage slug={relatedPost.slug} title={relatedPost.title} url={relatedPost.coverImage.url} />
          </div>
          <div className="mt-3 md:w-3/4 md:ml-4 md:ml-7 md:mt-1">
            <h3 className="mb-2 text-base font-bold leading-snug md:text-xl">
              <Link as={`/posts/${relatedPost.slug}`} href="/posts/[slug]">
                <a className="hover:underline">{relatedPost.title}</a>
              </Link>
            </h3>
            <p className="mb-4 text-sm leading-relaxed md:text-base">{relatedPost.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  ) 
}
