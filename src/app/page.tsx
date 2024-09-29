"use client";

import React from "react";
import { useRef } from 'react';
import { MainInfoBox } from '@/app/main-info-box';
import { OnscreenImg } from '@/app/img-in-corner';
import { FAQsection_code } from '@/app/faqsection'
import ProductPanelProduction, { goToLink } from '@/app/projects/ProductPanel';
import Image from "next/image";

export default function Main() {
    const secpartScroll = useRef<HTMLElement | null>(null);
    const FAQpage = useRef<HTMLElement | null>(null);
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return(
      <>
        <section id="1-part" className="">
          <div className="min-h-screen bg-alt-1">
            <div className="flex flex-col">
                <div className="sm:m-2 md:m-5"> <MainInfoBox/> </div>
            </div>
            <div className="relative flex flex-grow justify-center">
              <div className="flex flex-col m-1">
                <button className="m-1 bg-gray-200 md:bg-black md:text-gray-800 lg:text-white hover:text-gray-800 lg:bg-opacity-50 px-10 py-1 rounded md:hover:bg-pink-50 transition-colors shadow-xl backdrop-blur-lg" onClick={() => {secpartScroll.current?.scrollIntoView({behavior: 'smooth'});}}>
                  <div className=" text-2xl lg:bg-opacity-50 rounded">
                      <>Наши сервисы</>
                  </div>
                </button>
                <button className="m-1 bg-gray-200 md:bg-black md:text-gray-800 lg:text-white hover:text-gray-800 lg:bg-opacity-50 px-10 py-1 rounded md:hover:bg-pink-50 transition-colors shadow-xl backdrop-blur-lg" onClick={() => {FAQpage.current?.scrollIntoView({behavior: 'smooth'});}}>
                  <div className=" text-2xl lg:bg-opacity-50 rounded">
                      <>Ваши вопросы</>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section ref={secpartScroll} className="p-14 min-h-screen lg:bg-opacity-20 shadow-2xl borderborder-gray-400 transition-colors bg-alt-2">
            <div className="lg:my-20" id="2-part">
                <ProductPanelProduction/>
                <button className="flex mx-auto bg-gray-200 md:bg-gray-400 rounded-lg shadow-lg lg:bg-opacity-70 lg:backdrop-blur-sm hover:bg-gray-300 transition-colors" onClick={() => {FAQpage.current?.scrollIntoView({behavior: 'smooth'});}}><div className="mx-5 my-2">Есть вопросы?</div></button>
                <div className="flex justify-center">
                    <div className="mt-12 rounded-lg bg-gray-300 shadow-lg lg:bg-opacity-70 lg:backdrop-blur-sm transition-all">
                        <div className="m-2 flex">
                            <button onClick={() => goToLink("github.com/Spoon-and-Fork")} className="">
                              <Image
                                src="/img/soc/gh.svg"
                                width={64}
                                height={64}
                                className="px-3"
                                alt="nacho"
                              />
                            </button>
                            <button onClick={() => goToLink("t.me/+L-uYxHxk3WthYmM6")} className="">
                              <Image
                                src="/img/soc/tg.svg"
                                width={64}
                                height={64}
                                className="px-3" 
                                alt="nacho"
                              />
                            </button>
                        </div>
                    </div>
                </div>
               </div>
        </section>

        <section ref={FAQpage} className="">
          <div className="min-h-screen bg-alt-3" id="3-part">
            <div className="flex justify-center max-w-screen-lg mx-auto pt-6 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-20 lg:px-8 lg:my-32 bg-gray-300 rounded-lg shadow-lg lg:bg-opacity-70 lg:backdrop-blur-sm"> <FAQsection_code/> </div>
          </div>
        </section>
        
        {<div className="sm:size-0 fixed bottom-0 right-0 md:size-52 justify-center">  <OnscreenImg onClick={scrolltoTop}/> </div>}
      </>
    );
}
