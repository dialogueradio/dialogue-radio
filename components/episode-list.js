import Link from 'next/link'
import ResumeButton from './resume-button'
import ResumeButtonSmall from './resume-button-small'

export default function Episode({ episodes }) {
  return (
    <div>
      {episodes.map((episode) => (
        <Link as={`/episodes/${episode.slug}`} href="/episodes/[episode.slug]">
          <a>
            <div className="py-5 pb-6 px-4 md:p-6 mb-6 md:mb-10 bg-white rounded-lg md:rounded-xl md:flex md:justify-between">
              <div className="md:w-4/6">
                <p className="text-xs md:text-base font-bold text-gray3">{episode.date}</p>
                <div className="flex items-center mt-2 mb-3">
                  <div className="mr-2 md:hidden">
                    <ResumeButtonSmall />
                  </div>
                  <h3 className="text-base md:text-2xl font-bold leading-snug ">{episode.title}</h3>
                </div>
                <p className="text-sm md:text-base float-left w-3/4 mr-2 md:float-none lg:w-auto">{episode.description}</p>
              </div>
              <div className="md:w-2/6">
                <div className="flex justify-end items-end">
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
