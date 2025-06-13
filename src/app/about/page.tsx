/* eslint-disable @next/next/no-img-element */
import { Title } from "@/shared/ui/kit/title";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Заголовок */}
      <Title className="text-center mb-12">О нашем проекте</Title>

      {/* Описание проекта */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xl text-gray-300 leading-relaxed">
          FilmFinder - это современная платформа для поиска и просмотра
          информации о фильмах. Мы стремимся сделать процесс выбора фильма
          максимально удобным и приятным.
        </p>
      </div>

      {/* Преимущества */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <img
              src="/file.svg"
              alt="Большая коллекция"
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-3">Большая коллекция</h3>
          <p className="text-gray-400">
            Тысячи фильмов разных жанров и годов в нашей постоянно растущей
            коллекции
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <img
              src="/window.svg"
              alt="Удобный интерфейс"
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-3">Удобный интерфейс</h3>
          <p className="text-gray-400">
            Интуитивно понятный дизайн и продвинутые функции поиска и фильтрации
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <img
              src="/globe.svg"
              alt="Всегда доступен"
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-3">Всегда доступен</h3>
          <p className="text-gray-400">
            Работаем 24/7, открыты на всех устройствах в любой точке мира
          </p>
        </div>
      </div>

      {/* Команда */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Александр Петров",
              role: "Основатель и CEO",
              image: "https://picsum.photos/seed/alex/200",
            },
            {
              name: "Мария Иванова",
              role: "Ведущий дизайнер",
              image: "https://picsum.photos/seed/maria/200",
            },
            {
              name: "Дмитрий Сидоров",
              role: "Главный разработчик",
              image: "https://picsum.photos/seed/dmitry/200",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
        <p className="text-gray-400 mb-6">
          Есть вопросы или предложения? Мы всегда рады обратной связи!
        </p>
        <a
          href="mailto:contact@filmfinder.com"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
        >
          Написать нам
        </a>
      </div>
    </main>
  );
}
