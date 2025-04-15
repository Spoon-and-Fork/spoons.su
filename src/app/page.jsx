import '@/app/css/mainpage.css'
import NavigationBar from './nav/navbar';
import Link from 'next/link';

export default function Home() {
  var buttonstyle = "m-1 bg-gray-200 md:bg-black md:text-gray-800 lg:text-white hover:text-gray-800 lg:bg-opacity-50 px-10 py-1 rounded md:hover:bg-pink-50 transition-colors shadow-xl backdrop-blur-lg"
  return (
    <body className="content">
      <nav>{NavigationBar()}</nav>

      <div className=''>
        <section className="page bg-alt-1 flex items-center justify-center" id="1-part">
          <div className="textbuttons">
            <div className='maintext'><h1>spoons.su</h1></div>
            <Link href={'/products'}>
              <button className={buttonstyle}>
                <div className="text-2xl lg:bg-opacity-50 rounded">
                  <>Наши сервисы</>
                </div>
              </button>
            </Link>
            <Link href={'/faq'}>
              <button className={buttonstyle}>
                <div className="text-2xl lg:bg-opacity-50 rounded">
                  <>Ваши вопросы</>
                </div>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </body>
  );
}