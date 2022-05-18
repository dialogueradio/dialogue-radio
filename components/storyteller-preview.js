import Link from 'next/link'

export default function StorytellerPreview({
  slug,
  name,
  picture,
  occupation
}) {
  return (
    <Link as={`/storytellers/${slug}`} href={`/storytellers/${slug}`} >
      <a>
        <div className="p-8 bg-white rounded-xl pb-9 duration-150 hover:shadow-xl">
          <img src={picture.url} className="mx-auto mb-5 border-4 rounded-full w-28 h-28 border-primary" alt={name} />
          <h3 className="mb-3 text-xl font-bold leading-snug text-center">
            {name}
          </h3>
          <p className="font-bold text-center text-gray3">{occupation}</p>
        </div>
      </a>
    </Link>
  )
}
