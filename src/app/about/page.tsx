'use client'

import '@/app/css/mainpage.css'
import { AboutSection } from "../components/AboutSection";
import NavigationBar from '../nav/navbar';

export default function AboutPage() {
  return (
    <body>
      <nav>{NavigationBar()}</nav>
      <div className="page bg-alt-3" id="3-part">
        <div className="
              flex 
              justify-center 
              max-w-screen-2xl
              mx-auto
            bg-gray-300 
              rounded-lg 
              shadow-lg 
              pt-6 
              pb-16 
              px-4 
              sm:pt-16 
              sm:pb-20 
              sm:px-6 
              lg:pt-10
              lg:pb-20 
              lg:px-8 
              lg:my-32 
              lg:bg-opacity-70 
              lg:backdrop-blur-sm">
          <AboutSection />
        </div>
      </div>
    </body>
  );
}