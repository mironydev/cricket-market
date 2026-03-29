import React from 'react';
import coinImage from '../../assets/coin.png'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar mt-5">
        <div className="flex-1">
          <a href="/"><img src={logo} alt="" width={60}/></a>
        </div>
        <div className="flex gap-10 items-center">
          <ul className='flex gap-5 font-semibold text-stone-500 select-none'>
            <li><a className='px-4 py-2 rounded-sm hover:bg-base-300 active:bg-stone-100' href="/">Home</a></li>
            <li><a className='px-4 py-2 rounded-sm hover:bg-base-300 active:bg-stone-100' href="/">Fixture</a></li>
            <li><a className='px-4 py-2 rounded-sm hover:bg-base-300 active:bg-stone-100' href="/">Teams</a></li>
            <li><a className='px-4 py-2 rounded-sm hover:bg-base-300 active:bg-stone-100' href="/">Schedules</a></li>
          </ul>
          <button className="btn flex items-center gap-2 justify-between font-bold">
            0 Coin
            <img src={coinImage} alt="" width={18}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;