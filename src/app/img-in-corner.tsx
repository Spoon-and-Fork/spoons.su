"use client";

import React from 'react';
import Image from 'next/image';

export const OnscreenImg = ({ onClick }: {
    onClick: React.MouseEventHandler<HTMLImageElement>
}) => {
    return (
        <button>
            <div className="rounded-xl">
                <Image
                src="/img/back-to-top.png"
                width={445}
                height={445}
                className="hidden md:block"
                alt="nacho"
                onClick={onClick}
                />
            </div>
        </button>
    );
}

export default function Logo() {
  return (
    <Image
      src="/img/favicon.ico"
      width={64}
      height={64}
      className="hidden md:block"
      alt="nacho" />
  );
}
