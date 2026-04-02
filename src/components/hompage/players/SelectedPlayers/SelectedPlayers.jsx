import React from "react";
import SelectedPlayerCard from "../../ui/SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
}) => {
  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    const newBalance = balance + player.price;

    setBalance(newBalance);
  };

  return (
    <div className="flex flex-col gap-5">
      {selectedPlayers.length === 0 ? (
        <div className="text-center space-y-2">
          <p className="text-xl opacity-50 font-semibold">
            No players selected
          </p>
          <p className="opacity-40">Go to available tab to select players</p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => (
          <SelectedPlayerCard
            player={player}
            index={index}
            handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
            key={index}
          ></SelectedPlayerCard>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
