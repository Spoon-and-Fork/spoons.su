'use client'

import '@/app/css/mainpage.css'
import { useRef } from "react";
import ProductPanelProduction from "../components/ProductPanel";
import Image from "next/image";
import NavigationBar from '../nav/navbar';
import { goToLink } from '../components/goToLink';

export default function Second_Page() {
    const secpartScroll = useRef<HTMLElement | null>(null);
    return (
        <div className="content">
            <nav>{NavigationBar()}</nav>
            <section ref={secpartScroll} className="page p-6 lg:bg-opacity-20 shadow-2xl transition-colors bg-alt-2 flex items-center justify-center">
                <div className="lg:my-6 mt-[20vh]" id="2-part">
                    <ProductPanelProduction />
                    <div className="flex justify-center">
                        <div className="mt-7 rounded-lg bg-gray-300/70 shadow-lg lg:bg-opacity-70 lg:backdrop-blur-sm transition-all">
                            <div className="m-1 flex">
                                <button onClick={() => goToLink(process.env.NEXT_PUBLIC_GITHUB_LINK || "github.com/Spoon-and-Fork")} className="">
                                    <Image
                                        src="/img/soc/gh.svg"
                                        width={64}
                                        height={64}
                                        className="px-3 cursor-pointer"
                                        alt="github"
                                        loading="eager"
                                    />
                                </button>
                                <button onClick={() => goToLink(process.env.NEXT_PUBLIC_TGBOT_LINK || "t.me/spoons_support_bot")} className="">
                                    <Image
                                        src="/img/soc/tg.svg"
                                        width={64}
                                        height={64}
                                        className="px-3 cursor-pointer"
                                        alt="telegram"
                                        loading="eager"
                                    />
                                </button>
                                <button onClick={() => goToLink(process.env.NEXT_PUBLIC_SUPPORT_SITE_LINK || "jivo.chat/dMMab5e5zq")} className="">
                                    <Image
                                        src="/img/soc/sp.svg"
                                        width={64}
                                        height={64}
                                        className="px-3 scale-125 cursor-pointer"
                                        alt="support"
                                        loading="eager"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}