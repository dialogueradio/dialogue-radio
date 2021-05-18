import Link from 'next/link'

export default function MoreStories({ storytellers }) {
  return (
    <section className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
      {storytellers.map((storyteller) => (
        <Link as={`/storytellers/${storyteller.slug}`} href="/storytellers/[storyteller.slug]">
          <a>
            <div className="bg-white rounded-xl p-8 pb-9 duration-150 hover:shadow-xl">
              <img src={storyteller.picture.url} className="w-28 h-28 mb-5 mx-auto border-4 border-primary rounded-full" alt={storyteller.name} />
              <h3 className="mb-3 text-xl text-center leading-snug font-bold">
                {storyteller.name}
              </h3>
            </div>
          </a>
        </Link>
      ))}
    </section>
  )
}
