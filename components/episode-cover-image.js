export default function EpisodeHostGuest({ coverImage }) {
  return (
    <img
      className="rounded-md w-28 h-28 md:w-56 md:h-56"
      src={coverImage.url}
      alt="Picture of the author"
      width={220}
      height={220}
    />
  ) 
}
