export default function MoreStories({ episodes }) {
  return (
    <div className="w-3/4">
      {episodes.map((episode) => (
        <div className="p-6 border-4 mb-10 border-black">
          <p className="text-xs">{episode.date}</p>
          <h3 className="mb-3 text-2xl leading-snug">{episode.title}</h3>
          <p>{episode.description}</p>
        </div>
      ))}
    </div>
  )
}
