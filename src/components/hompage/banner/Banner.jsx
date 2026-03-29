import React from 'react';
import bannerImage from '../../../assets/banner-main.png'
import bannerBG from '../../../assets/bg-shadow.png'

const Banner = () => {
  return (
    <div className='w-11/12 mx-auto select-none'>
      <div className='relative bg-[#121212] rounded-3xl mt-10 text-white text-center space-y-8'>
        <img className='absolute rounded-3xl w-full h-full pointer-events-none' src={bannerBG} alt="" />
        <img className='w-fit mx-auto pt-20' src={bannerImage} alt="" />
        <h2 className='text-4xl font-bold px-2'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className='text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
        <button className='btn bg-[#D2E726] font-bold mb-15 outline-offset-6 border-0 outline-2 outline-[#D2E726] shadow-none text-base'>Claim Free Credit</button>
      </div>
    </div>

  );
};

export default Banner;