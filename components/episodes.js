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
            <div className="relative py-5 pb-6 px-4 md:p-6 mb-6 md:mb-10 bg-white rounded-lg md:rounded-xl md:flex md:justify-between duration-150 hover:shadow-xl">
              {episodes.length == episode.episodeNumber ? (
                <div className="badge-layout md:badge-layout-lg">
                  <div className="badge-base md:badge-base-lg">
                    <div className="bage-src badge-bg md:badge-bg-lg"></div>
                    <span className="badge-label text-xs md:text-base">NEW</span>
                  </div>
                </div>
              ) : ( "" )}
              <div className="md:w-4/6">
                <DateDuration date={episode.date} audioDuration={episode.audioDuration} />
                <div className="flex items-center mt-2 mb-3">
                  <div className="mr-2 md:hidden">
                    <ResumeButtonSmall />
                  </div>
                  <h3 className="text-base md:text-2xl font-bold leading-snug ">{episode.title}</h3>
                </div>
                <p className="hidden md:inline text-sm md:text-base w-3/4 mr-2 lg:w-auto">{episode.description}</p>
              </div>
              <div className="md:w-2/6">
                <div className="flex justify-end items-end">
                  <div className="hidden md:flex mr-12 mb-2">
                    <ResumeButton />
                  </div>
                  <div className="flex">
                    <p className="md:hidden text-sm md:text-base mr-2">{episode.description}</p>
                    <img
                      className="rounded-md w-24 h-24 md:w-40 md:h-40"
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
