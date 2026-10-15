import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <div className="fixed inset-0 z-0">
        <Image src="/img/bg/up.webp" alt='' fill className='object-cover pointer-events-none' />
      </div>
      <section className="relative min-h-screen flex items-center justify-center" id="1-part">
        <div className="">
          <div className='flex justify-center text-neutral-800 text-6xl md:text-8xl font-bold text-shadow-[1px_0_5px_#333] select-none pb-5'><h1>spoons.su</h1></div>
          <div className="flex gap-4 flex-col md:items-center">
            <div className="flex gap-5 flex-col md:flex-row text-center ">
              <Link href={'/products'} className="text-2xl rounded m-1 md:bg-black/60 bg-neutral-800 lg:text-white hover:text-gray-800 px-10 py-1 md:hover:bg-pink-50 transition-colors shadow-xl backdrop-blur-lg">
                <p>Наши сервисы</p>
              </Link>
              <Link href={'/faq'} className="text-2xl m-1 md:bg-black/60 bg-neutral-800 lg:text-white hover:text-gray-800 px-10 py-1 rounded md:hover:bg-pink-50 transition-colors shadow-xl backdrop-blur-lg">
                <p>Ваши вопросы</p>
              </Link>
            </div>
            <Link href={'https://t.me/spoons_support_bot'} className="text-2xl md:w-1/2 m-1 w-full text-center md:bg-black/60 bg-neutral-800 lg:text-white hover:text-gray-800 px-10 py-1 rounded md:hover:bg-pink-50 transition-colors shadow-xl backdrop-blur-lg">
              <p>Техподдержка</p>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
