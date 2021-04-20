export default function EpisodeHostGuest({ relatedPosts }) {
  return (
    <div>
      {relatedPosts.map((relatedPost) => (
          <p>{relatedPost.title}</p>
      ))}
    </div>
  ) 
}
