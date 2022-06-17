import React, { useContext, useEffect } from "react";
import Link from 'next/link'
import DateDuration from './date-duration'
import { PlayerContext } from "../context/AudioPlayer";

const Episode = ({ episodes }) => {

  const {
    state: { playing, episode },
    dispatch
  } = useContext(PlayerContext);

  // set latest episode when any episode is not set
  useEffect(() => {
    if (!episode) {
      dispatch({ type: "setEpisode", payload: episodes[0] });
    }
  }, []);

  let currentEpisode = episode

  return(
    <div>
      {episodes.map((episode) => (
        <Link key={episode.slug} as={`/episodes/${episode.slug}`} href={`/episodes/${episode.slug}`}>
          <a>
            <div className="relative px-4 py-5 pb-6 mb-6 bg-white rounded-lg md:p-6 md:mb-10 md:rounded-xl md:flex md:justify-between duration-150 hover:shadow-xl">
              {episodes[0].episodeNumber === episode.episodeNumber ? (
                <div className="badge-layout md:badge-layout-lg">
                  <div className="badge-base md:badge-base-lg">
                    <div className="bage-src badge-bg md:badge-bg-lg"></div>
                    <span className="text-xs badge-label md:text-base">NEW</span>
                  </div>
                </div>
              ) : ( "" )}
              <div className="md:w-4/6">
                <DateDuration date={episode.date} audioDuration={episode.audioDuration} />
                <div className="flex items-center mt-2 mb-3">
                  <div className="mr-2 md:hidden">
                    <button 
                      onClick={e => {
                        e.preventDefault();
                        dispatch({
                          type:
                          playing && episode.episodeNumber === currentEpisode.episodeNumber
                          ? "pause"
                          : "playEpisode",
                          payload: episode
                        });
                      }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center bg-gray5 shadow-lg ${ playing && episode.episodeNumber === currentEpisode.episodeNumber ? "animate-pulse" : ""}`}>
                      <img
                        src={`${     
                          playing && episode.episodeNumber === currentEpisode.episodeNumber
                          ? "https://res.cloudinary.com/dialogue-radio/image/upload/v1654433243/pause_whhbsl.svg"
                          : "https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg"
                        }`}
                        className={`w-2 h-auto ${ playing && episode.episodeNumber === currentEpisode.episodeNumber ? "" : "ml-0.5"}`}
                        alt="再生ボタン"
                      />
                    </button>
                  </div>
                  <h3 className="text-base font-bold leading-snug md:text-2xl ">{episode.title}</h3>
                </div>
                <p className="hidden w-3/4 mr-2 text-sm md:inline md:text-base lg:w-auto">{episode.description}</p>
              </div>
              <div className="md:w-2/6">
                <div className="flex items-end justify-end">
                  <div className="hidden mb-2 lg:mr-12 md:mr-3 md:flex">
                    <button 
                      onClick={e => {
                        e.preventDefault();
                        dispatch({
                          type:
                          playing && episode.episodeNumber === currentEpisode.episodeNumber
                          ? "pause"
                          : "playEpisode",
                          payload: episode
                        });
                      }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center bg-gray5 shadow-lg`}>
                      <img
                        src={`${     
                          playing && episode.episodeNumber === currentEpisode.episodeNumber
                          ? "https://res.cloudinary.com/dialogue-radio/image/upload/v1654433243/pause_whhbsl.svg"
                          : "https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg"
                        }`}
                        className={`w-5 h-auto ${ playing && episode.episodeNumber === currentEpisode.episodeNumber ? "" : "ml-1"}`}
                        alt="再生ボタン"
                      />
                    </button>
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-sm md:hidden md:text-base">{episode.description}</p>
                    <img
                      className="w-24 h-24 rounded-md md:w-40 md:h-auto"
                      src={episode.coverImage.url}
                      alt="Cover image"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
              <span className="absolute right-0 z-0 leading-none -bottom-1.5 pr-30 md:pr-80 text-7xl text-beige opacity-20 font-poetsen">
                {('000' + episode.slug).slice( -3 )}
              </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Episode;
