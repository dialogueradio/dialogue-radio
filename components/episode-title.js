export default function EpisodeTitle({ title, date }) {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
      <p className="text-sm md:text-base font-bold mt-1 text-gray3">{date}</p>
    </>
  ) 
}
