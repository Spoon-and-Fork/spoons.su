"use client";

import React from "react";
import ProductPanelProduction from './ProductPanel';
import { OnscreenImg } from '@/app/img-in-corner';

const handleImageClick = () => {
    window.location.href = '/'; // Замените '/target-page' на нужный URL
};

export default function Main() {
      return (
        <div className="">
          <header className="flex bg-opacity-20 p-4 top left absolute select-none" onClick={handleImageClick}>
          <button>
            <h1 className="text-3xl font-bold">spoonVerse</h1>
          </button>
            <p className="text-lg">наши проекты</p>
          </header>
          <main className="flex-grow flex flex-col justify-center">
            <section className="p-10">
            </section>
            <ProductPanelProduction/>
            <div className="absolute top-0 right-0 size-52"> { <OnscreenImg onClick={handleImageClick}/> } </div>    
          </main>
          <div className="
            flex
            absolute
            bottom-20
            mb-24
            rounded-lg
          bg-gray-400 
            py-10
            md:w-1/3
            shadow-lg
            bg-opacity-70 
            backdrop-blur-sm
            place-content-center
            justify-center"
          >
          </div>
        </div>
      );
}

