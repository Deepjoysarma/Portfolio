import React from 'react'
import { FaCss3, FaCode, FaHtml5, FaJs, FaNodeJs, FaReact, FaJava } from "react-icons/fa"
import { SiExpress, SiMongodb, SiMysql, SiCplusplus } from "react-icons/si"

const Experience = () => {
  return (
    <div id='Experience' className="p-6 md:p-16">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Experience</h1>

      {/* Wrap icons and internship card in a flex-col (mobile) or flex-row (md+) container */}
      <div className="flex flex-col md:flex-row items-start gap-10">

        {/* Skill icons */}
        <div className="flex flex-wrap gap-6 md:w-1/2 justify-center">
          {[SiCplusplus, FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, SiExpress, SiMongodb, SiMysql, FaCode].map((Icon, index) => (
            <span key={index} className="p-3 bg-zinc-950 flex items-center rounded-2xl shadow-md">
              <Icon
                size={50}
                color={
                  Icon === SiCplusplus ? "#00599C" :
                  Icon === FaJava ? "#f89820" :
                  Icon === FaHtml5 ? "#E34F26" :
                  Icon === FaCss3 ? "#4682B4" :
                  Icon === FaJs ? "#FFFF00" :
                  Icon === FaReact ? "#87CEEB" :
                  Icon === FaNodeJs ? "#008000" :
                  Icon === SiExpress ? "#FFFFFF" :
                  "#47A248"
                }
              />
            </span>
          ))}
        </div>

        {/* Internship Card */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-900 bg-opacity-60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2">
          <img
            className="w-28 h-auto object-contain"
            src="https://10xtech.co.in/wp-content/uploads/2024/11/Asset-44@4x-1024x519.png"
            alt="10xTech Logo"
          />
          <div className="text-white">
            <h2 className="text-xl font-semibold">Software Developer Intern</h2>
            <p className="text-sm text-gray-300 mb-2">Sept 2024 - Oct 2024</p>
            <ul className="list-disc pl-5 text-sm text-gray-200">
              <li>Worked as a Frontend Developer using React.js</li>
              <li>Contributed to developing an invoice generation system optimized for business operations.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
