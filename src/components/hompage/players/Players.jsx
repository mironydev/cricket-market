import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, balance, setBalance }) => {
  const playersData = use(playersPromise);

  const [active, setActive] = useState("available");

  const handleActiveButton = (state) => {
    setActive(state);
  };

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="w-11/12 mx-auto pb-60">
      <div className="flex justify-between mt-15 mb-10">
        <p className="text-3xl font-bold">
          {active === "available"
            ? `Available Players (${playersData.length})`
            : `Selected Players (${selectedPlayers.length}/${playersData.length})`}
        </p>
        <div>
          <button
            className={`btn text-base rounded-l-md rounded-r-none ${active === "available" ? "btn-success text-white" : ""} `}
            onClick={() => {
              handleActiveButton("available");
            }}
          >
            Available
          </button>
          <button
            className={`btn text-base rounded-r-md rounded-l-none ${active === "selected" ? "btn-info text-white" : ""} `}
            onClick={() => {
              handleActiveButton("selected");
            }}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {active === "available" ? (
        <AvailablePlayers
          playersData={playersData}
          balance={balance}
          setBalance={setBalance}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          balance={balance}
          setBalance={setBalance}
        />
      )}
    </div>
  );
};

export default Players;
