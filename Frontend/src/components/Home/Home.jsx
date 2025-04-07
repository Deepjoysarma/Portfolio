import React from 'react';
import Gif from '../../assets/Gif.gif'; // Assuming you have a gif in your assets folder
import TextChange from '../TextChange';


const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full items-center justify-between p-10 md:p-20">
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tight">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-3">
          I’m a passionate fullstack developer skilled in building responsive, scalable web apps from scratch.
        </p>
        <a href="#Contact">
          <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
            Contact Me
          </button>
        </a>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img className="w-3/4 md:w-2/3" src={Gif} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
