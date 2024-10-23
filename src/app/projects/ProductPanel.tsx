"use client";

import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import React from "react";


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
    <button className="flex flex-row justify-center bg-gray-400 rounded-lg shadow-lg lg:bg-opacity-70 lg:backdrop-blur-sm p-4 sm:w-3/12 lg:w-1/6 hover:bg-gray-400 transition-colors " onClick={() => goToLink(link)}>
      <div className="w-72">
        <div className="flex justify-center">       
           <Image src={imageSrc} alt={title} className="h-40" width={150} height={150}/>
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
    { title: "Почта", description: "mail.spoons.su", imageSrc: "/img/proj/mail.svg", link: "mail.spoons.su"  },
    { title: "Matrix", description: "matrix.spoons.su", imageSrc: "/img/proj/messenger.svg", link: "matrix.spoons.su"  },
    { title: "Parsec", description: "Свяжитесь с нами!", imageSrc: "/img/proj/parsec.svg", link: "t.me/+LX_nVyDNeHRhODc6"  },
    { title: "VPN", description: "Свяжитесь с нами!", imageSrc: "/img/proj/vpn.svg", link: "t.me/spoons_neko_bot"  },
    { title: "TeamSpeak", description: "ts.spoons.su", imageSrc: "/img/proj/teamspeak.svg", link: "tmspk.gg/QAhU3RxA"  },
    { title: "То да сё", description: "Всё будет", imageSrc: "/img/proj/spoon.svg", link: "t.me/+LX_nVyDNeHRhODc6"  },
  ];
  return(
    <div className="flex flex-wrap justify-center gap-4 p-2">
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
