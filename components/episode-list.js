import Link from 'next/link'
import ResumeButton from './resume-button'

export default function Episode({ episodes }) {
  return (
    <div>
      {episodes.map((episode) => (
        <Link as={`/episodes/${episode.slug}`} href="/episodes/[episode.slug]">
          <a>
            <div className="p-6 mb-10 bg-white rounded-xl md:flex justify-between">
              <div>
                <p className="text-base font-bold text-gray3">{episode.date}</p>
                <div className="flex">
                  <div className="mr-2 md:hidden">
                    <ResumeButton />
                  </div>
                  <h3 className="text-2xl font-bold leading-snug lg:mt-1 mb-3">{episode.title}</h3>
                </div>
                <p className="float-left w-3/4 mr-2 md:float-none lg:w-auto">{episode.description}</p>
              </div>
              <div>
                <div className="flex items-end">
                  <div className="hidden md:flex mr-12 mb-2">
                    <ResumeButton />
                  </div>
                  <div>
                    <img
                      className="rounded-md"
                      src={episode.coverImage.url}
                      alt="Cover image"
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
