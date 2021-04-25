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
    <div className="bg-white p-0 my-5 rounded-md md:mr-9 md:py-7 md:px-9 md:rounded-xl md:m-0">
      <div className={`bg-secondary md:bg-primary md:bg-opacity-10 py-3 px-5 text-center md:rounded ${ menuIsOpen ? "rounded-t " : "rounded"}`} onClick={onClick}>
        <h3 className="text-white text-left md:text-center md:text-primary font-bold">購読して聞く</h3>
      </div>
      <ul className={`px-8 md:p-0 ${ menuIsOpen ? "py-3.5" : "h-0 overflow-hidden md:overflow-auto md:h-auto"}`}>
      {platform.map(({ href, src, label }) => (
          <li className="w-full py-3 md:py-2 text-white md:mt-5 md:w-auto md:py-auto">
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
