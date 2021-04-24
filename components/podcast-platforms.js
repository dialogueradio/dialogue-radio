import React, { useState } from "react";

const platform = [
  { href: "https://podcasts.apple.com/jp/podcast/ダイアログラジオ-dialogue-radio/id1527150714?l=en", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/apple-podcasts_uq7puz.png", label: "Apple Podcast" },
  { href: "https://open.spotify.com/show/1HXmRr01UCE3NFz5faNdiP", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/spotify_nevf2a.png", label: "Spotify" },
  { href: "https://stand.fm/channels/5ed5258a354d77a05016ae9a", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/stand-fm_sg6jjk.png", label: "stand.fm" },
  { href: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zMDc3NTYyMC9wb2RjYXN0L3Jzcw==", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/google-podcasts_bdjuud.png", label: "Google Podcasts" },
  { href: "https://pca.st/2hrg9jti", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/pocketcasts_pntxu4.png", label: "Pocket Cast" },
  { href: "https://anchor.fm/s/30775620/podcast/rss", src: "https://res.cloudinary.com/dialogue-radio/image/upload/v1617787619/icon/rss_x7j0t3.png", label: "RSS" },
]

export default function PodcastPlatforms() {

  const [ menuIsOpen, toggleMenu ] = useState(false)

  const onClick = e => {
    e.preventDefault();
    toggleMenu(previous => !previous);
  };

  return (
    <div className="bg-white py-7 px-9 rounded-xl md:mr-9">
      <div className="bg-primary bg-opacity-10 p-3 text-center rounded" onClick={onClick}>
        <h3 className="text-primary font-bold">購読して聞く</h3>
      </div>
      <ul className={`${ menuIsOpen ? "" : "h-0 overflow-hidden md:overflow-auto md:h-auto"}`}>
      {platform.map(({ href, src, label }) => (
          <li className="w-full py-2 text-white mt-5 md:w-auto md:py-auto">
            <a href={href} target="_blank">
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
