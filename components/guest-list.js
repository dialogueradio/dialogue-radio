import Link from 'next/link'

export default function MoreStories({ guests }) {
  return (
    <section className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
      {guests.map((guest) => (
        <div className="bg-white rounded-xl p-8 pb-9">
          <img src={guest.picture.url} className="w-28 h-28 mb-5 mx-auto border-4 border-primary rounded-full" alt={guest.name} />
          <h3 className="mb-3 text-xl text-center leading-snug font-bold">
          <Link as={`/guests/${guest.slug}`} href="/guests/[guest.slug]">
            <a className="hover:underline">{guest.name}</a>
          </Link>
          </h3>
        </div>
      ))}
    </section>
  )
}
