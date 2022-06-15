import React, { useContext, useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useMediaControls } from "react-browser-hooks";
import { PlayerContext } from "../context/AudioPlayer";

const hms = seconds =>
  seconds ? new Date(seconds * 1000).toISOString().substr(11, 8) : "00:00:00";
const seconds =  hms => {
    var p = hms.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    return s;
}
const playerComponents = {
  overrides: {
    h1: {
      props: {
        className: "text-lg truncate group-hover:underline"
      }
    }
  }
};

const AudioPlayer = () => {
  const {
    state: { playing, interacted, episode },
    dispatch
  } = useContext(PlayerContext);

  const [trackLoaded, setTrackLoaded] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(true);

  const player = useRef(null);
  const isFirstRun = useRef(true);

  const { pause, unmute, play, currentTime } = useMediaControls(player);

  useEffect(() => {
    if (episode) {
      setTrackLoaded(true);
    }
  }, [episode]);

  useEffect(() => {
    if (!isFirstRun.current) {
      if (playing) {
        unmute();
        play();
      } else {
        pause();
      }
    }
    if (isFirstRun.current) {
      isFirstRun.current = false;
    }
  }, [playing, episode]);

  const togglePlay = () => {
    if (playing) {
      dispatch({ type: "pause" });
    } else {
      dispatch({ type: "play" });
    }
  };

  const togglePlayer = () => {
    if (playerOpen) {
      setPlayerOpen(false);
    } else {
      setPlayerOpen(true);
    }
  };

  return (
    <Draggable positionOffset={{ x: "-50%", y: 0 }}>
      <div
        className={`fixed bottom-0 left-1/2 ${
          playerOpen ? "w-full md:w-1/3" : "w-full md:w-auto"
        } md:rounded-full main-gradient shadow-xl md:mb-12 z-50`}
      >
        <audio
          ref={player}
          muted
          src={interacted ? episode.audioFile.url : null}
        ></audio>
        <div className="flex items-center px-2 py-2 mt-1 text-gray-100 bg-gray5 md:px-8 md:py-8 md:rounded-full bg-darkgray-900 group">
          <button onClick={togglePlay} className={`w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-white`}>
            <img
              src={`${     
                playing
                ? "https://res.cloudinary.com/dialogue-radio/image/upload/v1654433243/pause_whhbsl.svg"
                : "https://res.cloudinary.com/dialogue-radio/image/upload/v1617956066/triangle_hlz6c8.svg"
              }`}
              className={`w-3 md:w-5 h-auto ${ playing ? "" : "ml-1"}`}
              alt="再生ボタン"
            />
          </button>
          {playerOpen && (
            <div className="w-8/12 pl-6">
              <div className="overflow-hidden">
                {trackLoaded ? (
                  <Link href={`/episodes/${episode.episodeNumber}`}>
                    <a className="whitespace-nowrap player-title">
                      {episode.title}
                    </a>
                  </Link>
                ) : (
                  <p>"…"</p>
                )}
              </div>
              <div className="relative flex items-center w-full h-1 my-2 bg-white rounded-full main-gradient">
                {trackLoaded ? (
                  <span
                    className='absolute w-2.5 h-2.5 border-2 border-white bg-black rounded-full'
                    style={{
                      left: `${(currentTime / seconds(episode.audioDuration)) * 100}%`
                    }}
                  />
                ) : null}
              </div>
              <div className="flex justify-between">
                {trackLoaded ? (
                  <React.Fragment>
                    <span>{hms(currentTime)}</span>
                    <span>{episode.audioDuration}</span>
                  </React.Fragment>
                ) : null}
              </div>
            </div>
          )}
          <div
            className={`ml-4 opacity-0 group-hover:opacity-100 ml-auto ${
              playerOpen ? "" : "hidden group-hover:block"
            }`}
          >
            <button className="invisible md:visible" onClick={togglePlayer}>
              <FontAwesomeIcon
                icon={playerOpen ? faChevronLeft : faChevronRight}
                width="18"
              />
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AudioPlayer;
