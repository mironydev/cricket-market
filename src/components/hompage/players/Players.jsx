import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);

  const [active, setActive] = useState('available');
  
  const handleActiveButton = (state) => {
    setActive(state);
  }

  return (
    <div className='w-11/12 mx-auto'>

      <div className='flex justify-between mt-15 mb-10'>
        <p className='text-3xl font-bold'>{active === 'available' ? 'Available Players' : 'Selected Players (0/9)'}</p>
        <div>
          <button className={`btn text-base rounded-l-md rounded-r-none ${active === 'available' ? 'btn-success' : ''} `} onClick={()=>{handleActiveButton('available')}}>Available</button>
          <button className={`btn text-base rounded-r-md rounded-l-none ${active === 'selected' ? 'btn-info' : ''} `} onClick={()=>{handleActiveButton('selected')}}>Selected (0)</button>
        </div>
      </div>

      {active === 'available' ? <AvailablePlayers playersData={playersData}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}

      
    </div>
  );
};

export default Players;