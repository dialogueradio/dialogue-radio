export default function EpisodeHostGuest({ coverImage }) {
  return (
    <img
      className="h-auto rounded-md w-28 md:w-56 md:h-auto"
      src={coverImage.url}
      alt="Cover image"
      width={220}
      height={220}
    />
  ) 
}
