import '@/app/css/navstyle.css'
import Link from 'next/link';

export default function NavigationBar() {
    return (
        <div className="navbar">
            <ul>
                <li className='navicon'><Link href="/">Главная</Link></li>
		<li className='navsupport'><a href="https://jivo.chat/dMMab5e5zq">Поддержка</a></li>
                <li className='navuser'><Link href="/panel">Панель</Link></li>
                {/*<li className='navabout'><Link href="/about">О нас</Link></li>*/}
                <li className='navfaq'><Link href="/faq">FAQ</Link></li>
                <li className='navproducts'><a href="/products">Продукты</a></li>
                <li className='navhome'><Link href="/">Главная</Link></li>
            </ul>
        </div>
    );
}
