"use client";

import React from "react";
import { FAQsection_code } from '@/app/faqsection'
import Image from "next/image";
import Link from "next/link";

export function ArrowLeft(){
  return(<>
    <Link href={'/'}>
                <Image
                      src="/img/ass/arrow-left.svg"
                      width={64}
                      height={64}
                      className="px-3 py-1 hidden md:block"
                      alt="nacho"
                />
              </Link></>
  )
}

export default function Main() {
    return(
        <>
          <div className="min-h-screen bg-alt-3" id="3-part">
            <div className="
              flex 
              justify-center 
              max-w-screen-lg 
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
              <div className="lg:absolute lg:left-10 bg-gray-300 rounded-lg hover:bg-gray-500 transition-colors">
                <ArrowLeft/>
              </div>
              <FAQsection_code/>
            </div>
          </div>
        </>
    );
}

