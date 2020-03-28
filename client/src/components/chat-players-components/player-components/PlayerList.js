import React from "react";
import "../../../styles/player-styles/playerlist.css";
import PlayerCard from "./PlayerCard";
import placeHolderAvatar from "../../../assets/images/placeholder-avatar.svg";

const PlayerList = ({
  secondUser,
  currentUser,
  players,
  handleShowChat,
  calling,
}) => {

  const playerListToComponent = players.map(player => {
    return (
      player._id !== currentUser._id && (
        <PlayerCard
          player={player}
          key={player._id}
          handleShowChat={handleShowChat}
          calling={calling}
        />
      )
    );
  });

  return (
    <div className="player-list__container">
      <div className="player-list__user-container">
        <div className="toHaveShadow"></div>
        <img
          className="player-list__avatar"
          src={currentUser.avatar ? currentUser.avatar : placeHolderAvatar}
          alt={currentUser.name.charAt(0)}
        />
        <h3 className={currentUser.status ? "button" : "disabled"}>
          {currentUser.name}
        </h3>
      </div>
      <div className="player-list__list-container">{playerListToComponent}</div>
    </div>
  );
};

export default PlayerList;
