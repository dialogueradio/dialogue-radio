import Link from 'next/link'

export default function CardBody({
    picture,
    name,
    role,
    occupation,
    biography,
    episodes 
}) {
  return (
    <>
      <img src={picture.url} className="mx-auto mb-5 border-4 rounded-full w-36 h-36 border-primary" alt={name} />
      <h2 className="mb-3 text-xl font-bold leading-snug text-center">{name}</h2>
      <p className="font-bold text-center text-gray3">{role}{occupation}</p>
      <p className="py-5">{biography}</p>
      <h3 className="flex items-center mb-3 text-xl font-bold text-center text-gray5 title-border">出演エピソード</h3>
      <div className="text-center">
        <ul className="inline-block">
          {episodes.map((episode) => (
            <li key={episode.slug} className="text-left font-bold py-1.5">
              <Link as={`/episodes/${episode.slug}`} href="/episodes/[slug]">
                <a className="hover:underline">{episode.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
