import Date from './date'

export default function EpisodeTitle({ date, audioDuration }) {
  return (
    <div className="flex items-center">
      <Date className="text-sm md:text-base mt-1 text-gray4" dateString={date} />
      <p className="inline-block text-xs md:text-sm border border-black leading-4 rounded py-0.5 px-2 ml-2 md:ml-3">{audioDuration}</p>
    </div>
  ) 
}
