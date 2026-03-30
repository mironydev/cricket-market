import React from 'react';
import bannerImage from '../../../assets/banner-main.png'
import bannerBG from '../../../assets/bg-shadow.png'

const Banner = () => {
  return (
    <div className='w-11/12 mx-auto select-none'>
      <div className='relative bg-[#121212] rounded-3xl mt-15 text-white text-center'>
        <img className='absolute rounded-3xl w-full h-full pointer-events-none' src={bannerBG} alt="" />
        <img className='w-fit mx-auto pt-20 pb-8' src={bannerImage} alt="" />
        <h2 className='text-4xl font-bold px-2'>Assemble Your Ultimate Cricket Team</h2>
        <p className='text-2xl text-gray-400 pb-9 pt-2'>Beyond Boundaries Beyond Limits</p>
        <button className='btn btn-warning font-bold mb-18 outline-offset-6 border-0 outline-2 outline-[#FCB700] shadow-none text-base'>Claim Free Credit</button>
      </div>
    </div>

  );
};

export default Banner;