import React from 'react';

const platforms = [
  {
    name: 'LeetCode',
    link: 'https://leetcode.com/deepjoysarma1223',
    image: 'https://leetcode.com/static/images/LeetCode_Sharing.png',
  },
  {
    name: 'CodeChef',
    link: 'https://www.codechef.com/users/deepjoysarma12',
    image: 'https://i.pinimg.com/736x/ef/3c/3f/ef3c3fd973ce6890b32d27be7a050b62.jpg',
  },
  {
    name: 'GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org/user/deepjoysahcf7/',
    image: 'https://arkapg211002.github.io/assets/images/gfg.jpg',
  },
  {
    name: 'HackerRank',
    link: 'https://www.hackerrank.com/profile/deepjoysarma1223',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/354785340/GA/BS/CK/63475444/hackerrank-software.png',
  },
];

const CodingPlatform = () => {
  return (
    <div className="w-full px-6 md:px-20 py-10 bg-gray-900 text-white" id="Platforms">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-left">Coding Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={platform.image}
              alt={platform.name}
              className="w-24 h-24 object-contain mb-4 rounded-xl"
            />
            <h3 className="text-lg font-semibold">{platform.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingPlatform;
