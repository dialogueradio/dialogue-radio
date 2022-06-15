import React, { useContext, useEffect } from "react";
import EpisodeTitle from './episode-title'
import EpisodeSubtitle from './episode-subtitle'
import EpisodeHostGuest from './episode-host-guest'
import EpisodeCoverImage from './episode-cover-image'
import DateDuration from './date-duration'
import { PlayerContext } from "../context/AudioPlayer";

export default function EpisodeHeader({
    title,
    date,
    audioDuration,
    hosts,
    guests,
    coverImage,
}) {

  const {
    state: { playing, episode },
    dispatch
  } = useContext(PlayerContext);

  return (
    <div className="md:flex">
      <div className="flex flex-col justify-between flex-grow md:mr-12">
        <div>
          <EpisodeTitle title={title} />
          <DateDuration date={date} audioDuration={audioDuration} />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <EpisodeSubtitle firstOne={true} title="出演者" />
            <EpisodeHostGuest hosts={hosts} guests={guests} />
          </div>
          <div className="relative md:hidden">
            <EpisodeCoverImage coverImage={coverImage} />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button 
                onClick={e => {
                  e.preventDefault();
                  dispatch({
                    type:
                    playing
                    ? "pause"
                    : "playEpisode",
                    payload: episode
                  });
                }}
                className={`w-7 h-7 rounded-full flex items-center justify-center bg-gray5 shadow-lg`}>
                <img
                  src={`${
                    playing
                    ? "https://res.cloudinary.com/dialogue-radio/image/upload/v1654433243/pause_whhbsl.svg"
                    : "https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg"
                  }`}
                  className={`w-2 h-auto ${ playing ? "" : "ml-1"}`}
                  alt="再生ボタン"
                />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <button 
              onClick={e => {
                e.preventDefault();
                dispatch({
                  type:
                  playing
                  ? "pause"
                  : "playEpisode",
                  payload: episode
                });
              }}
              className={`w-14 h-14 rounded-full flex items-center justify-center bg-gray5 shadow-lg`}>
              <img
                src={`${     
                  playing
                  ? "https://res.cloudinary.com/dialogue-radio/image/upload/v1654433243/pause_whhbsl.svg"
                  : "https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg"
                }`}
                className={`w-5 h-auto ml-1`}
                alt="再生ボタン"
              />
            </button>            
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <EpisodeCoverImage coverImage={coverImage} />
      </div>
    </div>
  )
}
