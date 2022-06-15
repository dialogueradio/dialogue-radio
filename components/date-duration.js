import Date from './date'

export default function EpisodeTitle({ date, audioDuration }) {
  return (
    <div className="flex items-center">
      <Date className="mt-1 text-sm md:text-base text-gray4" dateString={date} />
      <p className="inline-block text-xs text-white bg-beige md:text-sm leading-4 rounded-md py-0.5 px-2 ml-2 md:ml-3">{audioDuration}</p>
    </div>
  ) 
}
