import Image from 'next/image';

export default function Logo() {
  return (
      <Image
            src="/img/favicon.png"
            width={64}
            height={64}
            className="hidden md:block"
            alt="nacho"
          />
  );
}
