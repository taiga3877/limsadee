import React from 'react';
import back1 from './image.png';
import back2 from './image copy.png';
import back3 from './image copy 2.png';
import back4 from './image copy 3.png';
import back5 from './image copy 4.png';
import back6 from './image copy 5.png';
import back7 from './image copy 6.png';
import back8 from './image copy 7.png';
import Section from '../../Components/Navbar/Section/Section';

const projects = [
  {
    url: "https://www.ataevbahodirbuild.uz/",
    img: back1,
    title: "Ataev Bahadir Build",
    description: "Quality construction and repair services! Choose us, create the house of your dreams."
  },
  {
    url: "https://www.autozoomrental.com/",
    img: back2,
    title: "AutoZoomRental",
    description: "Convenient and reliable car rental! Make your trip more pleasant with our cars."
  },
  {
    url: "https://www.it-time-academy.uz/",
    img: back3,
    title: "IT Time Academy",
    description: "The destination of modern IT knowledge! Take the professions of the future with us."
  },
  {
    url: "https://www.homekit.uz/",
    img: back4,
    title: "HomeKit",
    description: "Modern and convenient smart home solutions! Ensure the safety and comfort of your home with us."
  },
  {
    url: "https://www.uzloyal.uz/",
    img: back5,
    title: "UzLoyal",
    description: "A reliable and convenient loyalty system! The most effective way to motivate your customers."
  },
  {
    url: "https://www.namanganoits.uz/",
    img: back6,
    title: "Namangan ITS",
    description: "A center of modern IT knowledge and skills! Get new opportunities at every step."
  },
  {
    url: "https://propartnyor.uz/",
    img: back7,
    title: "ProPartnyor",
    description: "The address of reliable and effective cooperation! We will work together for the success of your business."
  },
  {
    url: "https://zamontour.uz/",
    img: back8,
    title: "ZamonTour",
    description: "Experience a happy tourist experience with us! Your trip with us is guaranteed to be more pleasant."
  }
];

const ProjectsGrid = () => {
  return (
    <div className="bg-[#1C4DCB] text-white py-10 px-6 sm:px-10">
      <br />
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Recent Projects</h2>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <img src={project.img} alt={project.title} className="w-full h-auto max-h-40 object-cover rounded-md mb-4" />
                <p className="text-gray-300">{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Three() {
  return <ProjectsGrid />;
}

export default Three;