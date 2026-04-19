import '@/app/css/mainpage.css'
import NavigationBar from './nav/navbar';
import Link from 'next/link';

export default function Home() {
  const buttonstyle = "m-1 bg-black/50 md:text-gray-800 lg:text-white hover:text-gray-800 px-10 py-1 rounded md:hover:bg-pink-50 transition-colors shadow-xl backdrop-blur-lg"
  return (
    <div className="content">
      <nav>{NavigationBar()}</nav>

      <div className=''>
        <section className="page bg-alt-1 flex items-center justify-center" id="1-part">
          <div className="textbuttons block ">
            <div className='maintext'><h1>spoons.su</h1></div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <Link href={'/products'}>
                  <button className={buttonstyle}>
                    <div className="text-2xl rounded">
                      <>Наши сервисы</>
                    </div>
                  </button>
                </Link>
                <Link href={'/faq'}>
                  <button className={buttonstyle}>
                    <div className="text-2xl rounded">
                      <>Ваши вопросы</>
                    </div>
                  </button>
                </Link>
              </div>
              <Link href={'https://t.me/spoons_support_bot'}>
                <button className={buttonstyle}>
                  <div className="text-2xl rounded">
                    <>Мне нужна помощь</>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
