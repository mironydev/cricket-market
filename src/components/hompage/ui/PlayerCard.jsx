import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const PlayerCard = ({ player }) => {
  const [isSelected, setIsSeleceted] = useState(false);
  return (
    <div className="card bg-base-100 border border-stone-100 shadow-md">
      <figure className='bg-base-300 pt-10'>
        <img
          src={player.playerImage}
          alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold"><FaUser></FaUser>{player.playerName}</h2>
        <div className='flex justify-between border-b border-stone-300 pb-4'>
          <div className='flex items-center gap-2 opacity-70'><FaFlag></FaFlag>{player.playerCountry}</div>
          <button className='bg-base-300 px-4 py-2 rounded-md'>{player.playerType}</button>
        </div>
        <p className='font-bold text-lg pb-1'>Rating</p>
        <div className='flex justify-between items-center text-base opacity-80 pb-2'>
          <p>{player.battingStyle}</p>
          <p className='text-right'>{player.bowlingStyle}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-base opacity-'>Price: ${player.price}</p>
          <button className='btn btn-neutral' onClick={() => setIsSeleceted(true)} disabled={isSelected}>
            {isSelected ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;