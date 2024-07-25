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
                src="/hero-desktop_transparent.png"
                width={577}
                height={577}
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
      src="/icon.png"
      width={64}
      height={64}
      className="hidden md:block"
      alt="nacho" />
  );
}
