"use client";

import React from 'react';
import { montserrat } from './ui/fonts';
import Logo from './img-in-corner';

function handleClick() {
      window.location.href = "/projects"
};

export function MainInfoBox(){
    return (
      <div className='flex sd:justify-center'>
        <div className="
          flex
          justify-center
          md:max-w-lg
          rounded-lg
        bg-gray-200 
          shadow-lg
          
          backdrop-blur-sm
          py-6
          px-5
          "
        >
          <div className="mb-10 m-auto px-5">
            <div className=""> { <Logo/> } </div>
              <p className={`${montserrat.className} md:text-xl text-gray-800 md:leading-normal`}>   
                  <strong>Добро пожаловать</strong> в <a href="https://spoons.su" className="text-blue-600"><strong>Spoon and Fork</strong></a>.
                  <br/>
                  В зависимости от того, каким образом 
                  вы попали к нам, мы рады вас здесь видеть.
                  <br/>
                  Мы, в прошлом, - небольшой пет-проект.
                  Сегодня Spoon and Fork - это различные 
                  полезные сервисы, возможно, среди которых 
                  вы найдете что-то что будет вам по душе.
                  <br/>
                  Итак, собираетесь ли вы остаться здесь, 
                  или же вас ждут неизвестные дали, 
                  добро пожаловать. Здесь безопасно.
                </p>
            </div>
        </div>
      </div>
    );
}

export function ButtonFunc(){
  return(<>
  <div className="mt-auto flex justify-center" onClick={handleClick}>
            <button className="bg-gray-500 text-white bg-opacity-50 px-10 py-2 rounded hover:bg-gray-700 transition-colors">
              <>Наши сервисы</>
            </button>
          </div></>);
}