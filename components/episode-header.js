import EpisodeTitle from './episode-title'
import EpisodeSubtitle from './episode-subtitle'
import EpisodeHostGuest from './episode-host-guest'
import EpisodeCoverImage from './episode-cover-image'
import ResumeButton from './resume-button'

export default function EpisodeHeader({
    title,
    date,
    hosts,
    guests,
    coverImage
}) {
  return (
    <div className="flex">
      <div className="flex-grow flex flex-col justify-between mr-12">
        <EpisodeTitle title={title} date={date} />
        <div className="flex justify-between items-end">
          <div>
            <EpisodeSubtitle>出演者</EpisodeSubtitle>
            <EpisodeHostGuest hosts={hosts} guests={guests} />
          </div>
          <ResumeButton />
        </div>
      </div>
      <div>
        <EpisodeCoverImage coverImage={coverImage} />
      </div>
    </div>
  )
}
