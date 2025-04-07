import React from 'react';
import Pink_blazzer from '../../assets/Pink_blazzer2.jpg';

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-start md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div className='w-full'>
        {/* About Heading */}
        <h2 className='text-2xl md:text-4xl font-bold mb-6'>About</h2>

        {/* Image and Text Side by Side */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <img
            className="md:h-80 w-full md:w-auto rounded-md lg:ml-20 lg:h-100"
            src={Pink_blazzer}
            alt="About Image"
          />

          <div className='w-full md:w-1/2'>
            <h1 className='text-xl md:text-2xl font-semibold mb-2'>Fullstack Developer</h1>
            <p className='text-sm md:text-md leading-tight'>
              I’m a passionate fullstack developer skilled in building responsive, scalable web apps from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
