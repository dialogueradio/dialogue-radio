const platform = [
  { href: "/", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/apple-podcasts_uq7puz.png", label: "Apple Podcast" },
  { href: "/posts", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/spotify_nevf2a.png", label: "Spotify" },
  { href: "/posts", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/stand-fm_sg6jjk.png", label: "stand.fm" },
  { href: "/posts", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/google-podcasts_bdjuud.png", label: "Google Podcasts" },
  { href: "/posts", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/pocketcasts_pntxu4.png", label: "Pocket Cast" },
  { href: "/posts", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/rss_x7j0t3.png", label: "RSS" },
]

export default function PodcastPlatforms() {
  return (
    <div className="bg-white py-7 px-9 rounded-xl md:mr-9">
      <div className="bg-primary bg-opacity-10 p-3 text-center rounded">
        <h3 className="text-primary font-bold">購読して聞く</h3>
      </div>
      <ul>
      {platform.map(({ href, src, label }) => (
          <li className="w-full py-2 text-white mt-5 md:w-auto md:py-auto">
            <a href={href}>
              <div className="inline-flex items-center justify-center">
                <div className="w-7 h-auto mr-4">
                  <img className="" src={src}></img>
                </div>
                <span className="text-gray-600 text-sm font-bold">{label}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
