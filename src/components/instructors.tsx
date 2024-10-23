"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";




const Instructors = [
  
  
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer ',
    image:'/images/pic9.jpeg' , 
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Genrativ Ai Developer ',
    image: '/images/pic11.jpeg', 
  },
  {
    id: 3,
    name: 'Robert Johnson',
    designation: ' SEO Export ',
    image: '/images/pic10.jpeg', 
  },
  {
    id: 4,
    name: 'Jessica Lee',
    designation: ' App Developer ',
    image:'/images/pic13.jpeg' , 
  },
  {
    id: 5,
    name: 'Jack',
    designation: 'Next.js Developer',
    image: '/images/pic12.jpeg', 
  },
  {
    id: 6,
    name: 'James',
    designation: 'Web Developer ',
    image: '/images/pic14.jpeg', 
  },
  

 
];


function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${'images/mentor_background.jpeg'})`,
        backgroundSize: 'contain', // Change to 'contain' to fit the logo
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10"> {/* Text above overlay */}
        <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-center mb-4 text-white drop-shadow">
          Discover the talented professionals who will guide your coding journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </div>
    </div>
  );
}

export default Instructor