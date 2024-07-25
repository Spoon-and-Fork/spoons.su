"use client";

import React from "react";
import {useRef} from 'react';
import Image from "next/image";
import { MainInfoBox } from '@/app/main-info-box';
import { OnscreenImg } from '@/app/img-in-corner';
import ProductPanelProduction, { goToLink } from '@/app/projects/ProductPanel';

export default function Main() {
    const secpartScroll = useRef<HTMLElement | null>(null);
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return(
      <>
        <section id="1-part" className="">
          <div className="min-h-screen">
            <div className="flex flex-col">
                <div className="m-5"> <MainInfoBox/> </div>
            </div>
            <div className="relative flex justify-center">
              <button className="bg-gray-400 md:bg-gray-200 text-white bg-opacity-50 px-10 py-2 rounded md:hover:bg-gray-700 transition-colors shadow-xl backdrop-blur-lg" onClick={() => {secpartScroll.current?.scrollIntoView({behavior: 'smooth'});}}>
                <div className="text-gray-800 text-2xl bg-opacity-50 rounded">
                    <>Наши проекты</>
                </div>
              </button>
            </div>
          </div>
        </section>

        <section ref={secpartScroll} className="">
            <div className="p-10 min-h-screen bg-opacity-20 shadow-2xl rounded-md border border-gray-400 bg-alt transition-colors " id="2-part">
                <ProductPanelProduction/>
                <div className="flex justify-center">
                    <div className="mt-20 rounded-lg bg-gray-300 shadow-lg bg-opacity-70 backdrop-blur-sm transition-all">
                        <div className="m-2 flex">
                            <button onClick={() => goToLink("github.com/Spoon-and-Fork")} className="">
                              <Image
                                src="/github-mark.svg"
                                width={64}
                                height={64}
                                className="px-3"
                                alt="nacho"
                              />
                            </button>
                            <button onClick={() => goToLink("t.me/+L-uYxHxk3WthYmM6")} className="">
                              <Image
                                src="/telegram-black-icon.svg"
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

        <div className="fixed bottom-0 right-0 size-52 justify-center">  <OnscreenImg onClick={scrolltoTop}/> </div>  
      </>
    );
}
