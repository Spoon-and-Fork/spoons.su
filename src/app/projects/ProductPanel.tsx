"use client";

import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import React from "react";


export function goToLink(link: string) {
    if (link === 'null'){}
    else{
        window.location.href = "https://" + link;}
};

export function ProductPanel({ title, title2, description, imageSrc, link }:{
  title:string,
  title2:string,
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
        <h2 className="text-xl font-semibold mb-2">{title2}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </button>
  );
}

export default function ProductPanelProduction(){
  const products = [
    { title: "Облачное хранилище", title2: "Nextcloud", description: "cloud.spoons.su", imageSrc: "/img/proj/nextcloud.svg", link: "cloud.spoons.su" },
    { title: "Фотопленка ", title2: "Immich", description: "photos.spoons.su", imageSrc: "/img/proj/immich.svg", link: "photos.spoons.su"  },
    { title: "Почтовая служба", title2: "Roundcube", description: "mail.spoons.su", imageSrc: "/img/proj/outlook.svg", link: "mail.spoons.su"  },
    { title: "Мессенджер", title2: "Element", description: "element.spoons.su", imageSrc: "/img/proj/element.svg", link: "element.spoons.su"  },
    { title: "Игровой сервис", title2: "Parsec", description: "Свяжитесь с нами!", imageSrc: "/img/proj/parsec.svg", link: "t.me/spoons_neko_bot"  },
    { title: "VPN", title2: "", description: "Свяжитесь с нами!", imageSrc: "/img/proj/vpn.svg", link: "t.me/spoons_neko_bot"  },
    { title: "TeamSpeak", title2: "", description: "ts.spoons.su", imageSrc: "/img/proj/teamspeak.svg", link: "tmspk.gg/QAhU3RxA"  },
    { title: "То да сё", title2: "", description: "Всё будет", imageSrc: "/img/proj/spoon.svg", link: "t.me/+LX_nVyDNeHRhODc6"  },
  ];
  return(
    <div className="flex flex-wrap justify-center gap-4 p-2">
      {products.map((product, index) => (
        <ProductPanel
          key={index}
          title={product.title}
          title2={product.title2}
          description={product.description}
          imageSrc={product.imageSrc}
          link={product.link}
        />
      ))}
    </div>
  );
}
