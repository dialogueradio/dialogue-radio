import Link from 'next/link'

export default function MoreStories({ episodes }) {
  return (
    <div className="w-3/4">
      {episodes.map((episode) => (
        <Link as={`/episodes/${episode.slug}`} href="/episodes/[episode.slug]">
          <div className="p-6 mb-10 bg-white rounded-xl">
            <p className="text-xs">{episode.date}</p>
            <h3 className="mb-3 text-2xl leading-snug">{episode.title}</h3>
            <p>{episode.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
