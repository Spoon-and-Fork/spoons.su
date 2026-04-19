'use client'

import '@/app/css/mainpage.css'
import { FAQsection_code } from "../components/FAQ";
import NavigationBar from '../nav/navbar';

export default function Third_Page() {
  return (
    <div>
      <nav>{NavigationBar()}</nav>
      <div className="page bg-alt-3" id="3-part">
        <div className="
              flex 
              justify-center 
              max-w-5xl
              mx-auto
            bg-gray-300/70
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
          <FAQsection_code />
        </div>
      </div>
    </div>
  );
}