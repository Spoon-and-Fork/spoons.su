"use client";

import React from 'react';

export function FAQsection_code() {
    return(
        <>
         <div className="">
                <div className="">
                    <h2 className="text-3xl leading-9 font-extrabold text-gray-900 text-center">
                        Возможно, здесь есть ответ на ваш вопрос
                    </h2>
                    <div className="mt-6 border-t-4 border-gray-100 pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                  При подключении к VPN через IKEv2 возникает ошибка \"Указнный порт уже открыт\".
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        Перезагрузите компьютер и попробуйте подключиться снова.
                                    </p>
                                </dd>
                            </dl>

                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                    Как с вами связаться?
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        Напишите в ЛС <a href='t.me/spoons_neko_bot'>нашему боту</a>.
                                    </p>
                                </dd>
                            </dl>

                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                    При подключении к Outline возникает ошибка \"Ключ доступа недействителен\".
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        Скорее всего, срок действия ключа истек. Напишите <a href='t.me/spoons_neko_bot'>нашему боту</a> и попросите новый ключ.
                                    </p>
                                </dd>
                            </dl>

                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                    Strongswan не подключается.
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        В приложении Strongswan нажмите \"⋮\", выберите \"Журнал\", затем \"Отправить журнал\" и пришлите его <a href='t.me/spoons_neko_bot'>нашему боту</a> - он разберется.
                                    </p>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                    Кто такой Хеко?
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        Что такое Хеко?
                                    </p>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                    Сайт долго грузится
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        Мы делаем все чтобы оптимизировать загрузку сайта (но пока получается не очень).
                                    </p>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                    Опять работаем ночью?
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        Снова.
                                    </p>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
                                    Как отсюда выйти?
                                </dt>
                                <dd className="mt-4">
                                    <p className="leading-6 text-base text-gray-500">
                                        Никак.
                                    </p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
}
