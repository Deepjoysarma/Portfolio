import React from "react";
import ProjectCard from "./ProjectCard";
import EcommerceImg from "../../assets/Ecommerce.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-6 md:p-16 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <ProjectCard
          title="E-Commerce Website"
          main="Developed a full-stack e-commerce website using React.js for the frontend and Express.js for the backend. Utilized MongoDB as the database to store user and product information. Tested API endpoints using Postman to ensure seamless data exchange between the frontend and backend." 
          image={EcommerceImg}
          demo="https://shopping-website-frontend-nu.vercel.app/"
          sourceCode="https://github.com/Deepjoysarma/ShoppingWebsite"
        />
        <ProjectCard
          title="Online Music Player"
          main="Built an interactive online music player using React.js featuring audio controls, playlists, and a responsive UI. Implemented state management to handle track selection and playback functionality." 
          image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
          demo="https://voluble-alfajores-622775.netlify.app/"
          sourceCode="https://github.com/Deepjoysarma/OnlineMusicPlayer"
        />
        <ProjectCard
          title="Uber Clone"
          main="Developed an Uber clone using the MERN stack and Socket.io. Integrated APIs to calculate the distance and estimated travel time between locations. Used Socket.io to enable real-time interaction between drivers and passengers, improving the booking experience." 
          image="https://wallpapercat.com/w/full/2/8/6/1259200-1920x1080-desktop-1080p-uber-wallpaper-photo.jpg"
          demo="https://www.linkedin.com/posts/deepjoy-sarma-35236b268_developed-a-ride-hailing-website-using-the-activity-7286985847063617536-bZj3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEGMli4BzvAZTOiCSFERAwKhLhDxGXfV9Ts"
          sourceCode="https://github.com/Deepjoysarma/uber-video"
        />
        <ProjectCard
          title="Password Generator"
          main="A simple React app to generate strong passwords. Users can choose to include numbers, special characters, and set the password length using a slider. The password updates automatically and can be copied with one click. It has a clean and easy-to-use design." 
          image="https://png.pngtree.com/background/20250102/original/pngtree-computer-of-a-programmer-with-lines-code-of-software-picture-image_15533605.jpg"
          demo="https://boisterous-pavlova-744479.netlify.app/"
          sourceCode="https://github.com/Deepjoysarma/PasswordGenerator"
        />
      </div>
    </div>
  );
};

export default Projects;
