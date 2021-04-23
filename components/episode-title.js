export default function EpisodeTitle({ title, date }) {
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-base font-bold mt-1 text-gray3">{date}</p>
    </>
  ) 
}
