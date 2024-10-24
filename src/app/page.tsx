"use client";

import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';

import TestiMonialCard from '@/components/TestiMovingCard';
import UpComingWebinars from '@/components/UpComingWebinars';

import WhyChooseUs from '@/components/WhyChooseUs';
import Instructor from '@/components/instructors';

const HomePage = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.07]'>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestiMonialCard />
      <UpComingWebinars />
      <Instructor/>
    </main>
  );
}

export default HomePage;