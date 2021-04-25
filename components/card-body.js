import Link from 'next/link'

export default function CardBody({
    picture,
    name,
    role,
    biography,
    episodes 
}) {
  return (
    <>
      <img src={picture.url} className="w-36 h-36 mb-5 mx-auto border-4 border-primary rounded-full" alt={name} />
      <h2 className="mb-3 text-xl text-center leading-snug font-bold">{name}</h2>
      <p className="text-center text-gray3 font-bold">{role}</p>
      <p className="py-5">{biography}</p>
      <h3 className="flex items-center mb-3 text-xl text-center text-gray5 font-bold title-border">出演エピソード</h3>
      <div className="text-center">
        <ul className="inline-block">
          {episodes.map((episode) => (
            <li className="text-left font-bold py-1.5">
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
