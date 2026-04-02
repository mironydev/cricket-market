import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedPlayerCard = ({ handleDeleteSelectedPlayer, player }) => {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-xl p-6">
      <div className="flex items-center gap-5">
        <img
          src={player.playerImage}
          alt=""
          className="bg-base-300 pt-3 h-20 rounded-xl w-auto"
        />
        <div>
          <p className="text-2xl font-bold pb-2">{player.playerName}</p>
          <p className="text-xl opacity-60">{player.playerType}</p>
        </div>
      </div>
      <button
        onClick={() => {
          handleDeleteSelectedPlayer(player);
        }}
        className="btn text-red-600 text-2xl px-3"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
