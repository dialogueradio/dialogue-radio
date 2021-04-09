import Link from 'next/link'

export default function Episode({ episodes }) {
  return (
    <div className="w-3/4">
      {episodes.map((episode) => (
        <Link as={`/episodes/${episode.slug}`} href="/episodes/[episode.slug]">
          <a>
            <div className="flex justify-between p-6 mb-10 bg-white rounded-xl">
              <div>
                <p className="text-base font-bold text-gray-300">{episode.date}</p>
                <h3 className="mt-1 mb-3 text-2xl font-bold leading-snug">{episode.title}</h3>
                <p>{episode.description}</p>
              </div>
              <div>
                <div className="flex items-end">
                  <div className="rounded-full h-14 w-14 flex items-center justify-center bg-accent mr-12 mb-2 shadow-lg">
                    <img src="https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg" className="ml-1" />
                  </div>
                  <div>
                    <img
                      className="rounded-md"
                      src={episode.coverImage.url}
                      alt="Picture of the author"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
