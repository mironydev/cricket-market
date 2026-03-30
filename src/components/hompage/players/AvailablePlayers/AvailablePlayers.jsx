import React from 'react';
import PlayerCard from '../../ui/PlayerCard';

const AvailablePlayers = ({ playersData }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
      {playersData.map(player=><PlayerCard player={player}></PlayerCard>)}
    </div>
  );
};

export default AvailablePlayers;