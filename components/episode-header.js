import EpisodeTitle from './episode-title'
import EpisodeSubtitle from './episode-subtitle'
import EpisodeHostGuest from './episode-host-guest'
import EpisodeCoverImage from './episode-cover-image'
import ResumeButton from './resume-button'
import ResumeButtonSmall from './resume-button-small'

export default function EpisodeHeader({
    title,
    date,
    hosts,
    guests,
    coverImage,
    audioFile
}) {
  return (
    <div className="md:flex">
      <div className="flex-grow flex flex-col justify-between md:mr-12">
        <EpisodeTitle title={title} date={date} />
        <div className="flex justify-between items-end">
          <div>
            <EpisodeSubtitle title="出演者" />
            <EpisodeHostGuest hosts={hosts} guests={guests} />
          </div>
          <div className="relative md:hidden">
            <EpisodeCoverImage coverImage={coverImage} />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* <ResumeButtonSmall /> */}
            </div>
          </div>
          <div className="hidden md:block">
            <audio controls preload="metadata" src={audioFile.url}></audio>
            {/*  <ResumeButton /> */}
          </div>
        </div>
        <div className="md:hidden">
          <audio controls preload="metadata" src={audioFile.url}></audio>
        </div>
      </div>
      <div className="hidden md:block">
        <EpisodeCoverImage coverImage={coverImage} />
      </div>
    </div>
  )
}
