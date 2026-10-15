//
import { FAQsection_code } from "../components/FAQ";
import Image from 'next/image';

export default function Third_Page() {
  return (
    <div>
      <div className="fixed inset-0">
        <Image src="/img/bg/dn.webp" alt='' fill unoptimized className='object-cover pointer-events-none' />
      </div>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="
              flex 
              justify-center 
              max-w-5xl
              mx-auto
            bg-gray-300
              md:bg-gray-300/70
              rounded-lg 
              shadow-lg 
              pt-20 
              pb-16 
              px-4 
              sm:pt-25 
              sm:pb-20 
              sm:px-6 
              lg:pt-30
              lg:pb-20 
              lg:px-8
              lg:bg-opacity-70 
              lg:backdrop-blur-sm">
          <FAQsection_code />
        </div>
      </div>
    </div>
  );
}