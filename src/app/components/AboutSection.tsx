import React from "react";

export function AboutSection() {
  return (
    <div className="text-gray-900">
      <h2 className="text-3xl font-bold text-center pb-4">Spoon and Fork</h2>
      <p className="text-lg leading-relaxed">
        Spoon and Fork — это, по большей части, технологический парк или инкубатор проектов.
        Какие-то проекты выстреливают и становятся популярными, другие же не находят конечного пользователя и уходят в небытие.
      </p>

      <p className="text-lg leading-relaxed">
        У нас имеется штат сетевых инженеров и системных администраторов, которые следят за правильной работой инфраструктуры и выделением ресурсов.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Наши сервисы</h3>
      <ul className="list-disc list-inside text-lg space-y-1">
        <li>Облачное хранилище</li>
        <li>Фотогалерея</li>
        <li>Чат</li>
        <li>Веб-хостинг</li>
      </ul>
    </div>
  );
}
