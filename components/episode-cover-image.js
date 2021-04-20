export default function EpisodeHostGuest({ coverImage }) {
  return (
    <img
      className="rounded-md"
      src={coverImage.url}
      alt="Picture of the author"
      width={220}
      height={220}
    />
  ) 
}
