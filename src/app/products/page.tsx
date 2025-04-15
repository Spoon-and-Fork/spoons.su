'use client'

import '@/app/css/mainpage.css'
import { useRef } from "react";
import ProductPanelProduction, { goToLink } from "../components/ProductPanel";
import Image from "next/image";
import NavigationBar from '../nav/navbar';

export default function Second_Page() {
    const secpartScroll = useRef<HTMLElement | null>(null);
    return (
        <body className="content">
            <nav>{NavigationBar()}</nav>
            <section ref={secpartScroll} className="page p-6 lg:bg-opacity-20 shadow-2xl borderborder-gray-400 transition-colors bg-alt-2 flex items-center justify-center">
                <div className="lg:my-6" id="2-part">
                    <ProductPanelProduction />
                    <div className="flex justify-center">
                        <div className="mt-7 rounded-lg bg-gray-300 shadow-lg lg:bg-opacity-70 lg:backdrop-blur-sm transition-all">
                            <div className="m-1 flex">
                                <button onClick={() => goToLink("github.com/Spoon-and-Fork")} className="">
                                    <Image
                                        src="/img/soc/gh.svg"
                                        width={64}
                                        height={64}
                                        className="px-3"
                                        alt="nacho"
                                    />
                                </button>
                                <button onClick={() => goToLink("t.me/+L-uYxHxk3WthYmM6")} className="">
                                    <Image
                                        src="/img/soc/tg.svg"
                                        width={64}
                                        height={64}
                                        className="px-3"
                                        alt="nacho"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}