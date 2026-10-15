"use client"

import '@/app/css/navstyle.css'
import Link from 'next/link';
import { useState } from 'react';

export default function NavigationBar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const toggle = () => {
        setDrawerOpen(!isDrawerOpen)
    }
    return (
        <header className="drawer z-50 fixed">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
                checked={isDrawerOpen}
                onChange={toggle}
                data-dashlane-ignore="true"
                data-bitwarden-no-autofill="true"
                data-lpignore="true"
                autoComplete="off"
            ></input>
            <div className="drawer-content flex flex-col max-h-12">
                <div className="navbar bg-neutral-800 w-full">
                    <Link href="/" className='float-right text-white my-2 mx-1 border-0 rounded-xl ml-5 md:ml-10'>spoons.su</Link>
                    <div className="flex-none lg:hidden ml-auto">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost drawer-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <nav className="hidden flex-none lg:flex ml-auto">
                        <ul className='menu menu-horizontal flex-row-reverse'>
                            <li className='float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950'>
                                <Link href="https://jivo.chat/dMMab5e5zq">Поддержка</Link>
                            </li>
                            <li className='float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950'>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li className='float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950'>
                                <Link href="/products">Продукты</Link>
                            </li>
                            <li className='float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950'><Link href="/">Главная</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <nav className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-neutral-900 min-h-full w-80 p-4">
                    <li className="float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950">
                        <Link href="/" className="hover:underline" onClick={toggle}>Главная</Link>
                    </li>
                    <li className='float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950'>
                        <Link href="https://jivo.chat/dMMab5e5zq">Поддержка</Link>
                    </li>
                    <li className='float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950'>
                        <Link href="/faq">FAQ</Link>
                    </li>
                    <li className='float-right text-white my-2 mx-1 border-0 rounded-md bg-neutral-950'>
                        <Link href="/products">Продукты</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
