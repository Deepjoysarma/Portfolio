import React from 'react'
import {RiGithubFill,RiLinkedinBoxFill,RiInstagramFill,RiFacebookBoxFill,RiMailFill} from "@remixicon/react";

const Footer = () => {
  return (
    <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to react out!</h3>
      </div>
      <ul className='text-sm md:text-xl flex gap-6 cursor-pointer'>
        <a href="mailto:deepjoysarma1223@gmail.com">
            <li>
                <RiMailFill size={40} />
            </li>
        </a>
        <a href="https://www.linkedin.com/in/deepjoy-sarma-35236b268/">
            <li>
                <RiLinkedinBoxFill size={40} />
            </li>
        </a>
        <a href="https://github.com/Deepjoysarma">
            <li>
                <RiGithubFill size={40} />
            </li>
        </a>
        <a href="https://www.instagram.com/deepjoy_sarma?igsh=MTV2YzJrcW00dDc4ZA==">
            <li>
                <RiInstagramFill size={40} />
            </li>
        </a>
        <a href="https://www.facebook.com/share/1BgTfCp2fE/">
            <li>
                <RiFacebookBoxFill size={40} />
            </li>
        </a>
      </ul>
    </div>
  )
}

export default Footer
