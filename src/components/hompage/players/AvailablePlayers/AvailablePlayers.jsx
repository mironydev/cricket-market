import React from 'react';
import PlayerCard from '../../ui/PlayerCard';

const AvailablePlayers = ({ playersData }) => {
  return (
    <div>
      <PlayerCard playersData={playersData}></PlayerCard>
    </div>
  );
};

export default AvailablePlayers;