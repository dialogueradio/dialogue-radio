import React from "react";

const PlayerContext = React.createContext(0);

const PlayerProvider = PlayerContext.Provider;

const initialState = {
  episode: null,
  playing: false,
  interacted: false
};

const reducer = (state, action) => {
  console.log('context実行')
  switch (action.type) {
    case "setEpisode":
      return { ...state, episode: action.payload };
    case "play":
      return { ...state, ...{ playing: true, interacted: true } };
    case "playEpisode":
      return {
        ...state,
        ...{ playing: true, interacted: true },
        episode: action.payload
      };
    case "pause":
      return { ...state, playing: false };
    default:
      throw new Error();
  }
};

export {
  PlayerProvider,
  PlayerContext,
  initialState,
  reducer
};
