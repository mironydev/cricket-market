import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div className='w-11/12 mx-auto'>
      Players: {playersData.length}
      <AvailablePlayers playersData={playersData}></AvailablePlayers>
    </div>
  );
};

export default Players;