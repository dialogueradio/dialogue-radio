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
    <div className="p-0 mt-5 mb-6 bg-white md:mb-9 rounded-xl xl:mr-9 xl:py-7 xl:px-9 xl:rounded-xl xl:m-0">
      <div className={`bg-secondary xl:bg-primary xl:bg-opacity-10 py-3 px-5 text-center xl:rounded ${ menuIsOpen ? "rounded-t " : "rounded"}`} onClick={onClick}>
        <h3 className="font-bold text-left text-white xl:text-center xl:text-primary">購読して聞く</h3>
      </div>
      <ul className={`px-8 xl:p-0 ${ menuIsOpen ? "py-3.5" : "h-0 overflow-hidden xl:overflow-auto xl:h-auto"}`}>
      {platform.map(({ href, src, label }) => (
          <li className="w-full py-3 text-white xl:py-2 xl:mt-5 xl:w-auto xl:py-auto">
            <a href={href} target="_blank">
              <div className="inline-flex items-center justify-center">
                <div className="h-auto mr-4 w-7">
                  <img className="" src={src}></img>
                </div>
                <span className="text-sm font-bold text-gray-600">{label}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
