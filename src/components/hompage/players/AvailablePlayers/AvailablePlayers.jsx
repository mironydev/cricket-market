import React from 'react';
import PlayerCard from '../../ui/PlayerCard';

const AvailablePlayers = ({ playersData, balance, setBalance, selectedPlayers, setSelectedPlayers }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
      {playersData.map(player =>
        <PlayerCard
          player={player}
          balance={balance}
          setBalance={setBalance}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          key={player.id}
        />
      )}
    </div>
  );
};

export default AvailablePlayers;