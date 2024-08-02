"use client";

import React from "react";
import Image from "next/image";
import { pages } from "next/dist/build/templates/app-page";

export function goToLink(link: string) {
    if (link === 'null'){}
    else{
        window.location.href = "https://" + link;}
};

export function ProductPanel({ title, description, imageSrc, link }:{
  title:string,
  description:string,
  imageSrc:string,
  link:string
}) {
  return (
    <button className="flex flex-row justify-center bg-gray-300 rounded-lg shadow-lg bg-opacity-70 backdrop-blur-sm p-4 w-auto md:w-3/12 hover:bg-gray-400 transition-colors " onClick={() => goToLink(link)}>
      <div className="w-52">
        <div className="flex justify-center">       
           <Image src={imageSrc} width={512} height={1024} alt={title} className="h-40" />
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </button>
  );
}

export default function ProductPanelProduction(){
  const products = [
    { title: "Nextcloud", description: "cloud.spoons.su", imageSrc: "/img/proj/cloud.svg", link: "cloud.spoons.su" },
    { title: "Immich", description: "photos.spoons.su", imageSrc: "/img/proj/photos.svg", link: "photos.spoons.su"  },
    { title: "Microsoft Exchange", description: "mail.spoons.su", imageSrc: "/img/proj/mail.svg", link: "mail.spoons.su"  },
    { title: "Matrix", description: "В разработке", imageSrc: "/img/proj/messenger.svg", link: "null"  },
    { title: "Parsec", description: "Свяжитесь с нами!", imageSrc: "/img/proj/parsec.svg", link: "t.me/+L-uYxHxk3WthYmM6"  },
    { title: "То да сё", description: "Всё будет", imageSrc: "/img/proj/spoon.svg", link: "t.me/+L-uYxHxk3WthYmM6"  },
  ]
  
  return(
    <div className="flex flex-wrap justify-center gap-4 p-10">
      {products.map((product, index) => (
        <ProductPanel
          key={index}
          title={product.title}
          description={product.description}
          imageSrc={product.imageSrc}
          link={product.link}
        />
      ))}
    </div>
  );
}
