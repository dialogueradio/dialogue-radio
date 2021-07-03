import Link from 'next/link'
import DateDuration from './date-duration'
import ResumeButton from './resume-button'
import ResumeButtonSmall from './resume-button-small'

export default function Episode({ episodes }) {
  return (
    <div>
      {episodes.map((episode) => (
        <Link as={`/episodes/${episode.slug}`} href="/episodes/[episode.slug]">
          <a>
            <div className="relative px-4 py-5 pb-6 mb-6 bg-white rounded-lg md:p-6 md:mb-10 md:rounded-xl md:flex md:justify-between duration-150 hover:shadow-xl">
              {episodes.length == episode.episodeNumber ? (
                <div className="badge-layout md:badge-layout-lg">
                  <div className="badge-base md:badge-base-lg">
                    <div className="bage-src badge-bg md:badge-bg-lg"></div>
                    <span className="text-xs badge-label md:text-base">NEW</span>
                  </div>
                </div>
              ) : ( "" )}
              <div className="md:w-4/6">
                <DateDuration date={episode.date} audioDuration={episode.audioDuration} />
                <div className="flex items-center mt-2 mb-3">
                  <div className="mr-2 md:hidden">
                    <ResumeButtonSmall />
                  </div>
                  <h3 className="text-base font-bold leading-snug md:text-2xl ">{episode.title}</h3>
                </div>
                <p className="hidden w-3/4 mr-2 text-sm md:inline md:text-base lg:w-auto">{episode.description}</p>
              </div>
              <div className="md:w-2/6">
                <div className="flex items-end justify-end">
                  <div className="hidden mb-2 lg:mr-12 md:mr-3 md:flex">
                    <ResumeButton />
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-sm md:hidden md:text-base">{episode.description}</p>
                    <img
                      className="w-24 h-24 rounded-md md:w-40 md:h-auto"
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
