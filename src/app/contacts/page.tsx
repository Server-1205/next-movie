/* eslint-disable @next/next/no-img-element */
"use client";

import { Title } from "@/shared/ui/kit/title";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactsPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы API запрос
    console.log("Form submitted:", formState);
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <Title className="text-center mb-12">Свяжитесь с нами</Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Форма обратной связи */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <h2 className="text-2xl font-semibold mb-6">Напишите нам</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Отправить сообщение
            </button>
          </form>
        </div>

        {/* Контактная информация */}
        <div className="space-y-8">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <h2 className="text-2xl font-semibold mb-6">
              Контактная информация
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-400">contact@filmfinder.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Телефон</h3>
                  <p className="text-gray-400">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Адрес</h3>
                  <p className="text-gray-400">
                    г. Москва, ул. Примерная, д. 123
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30">
            <img
              src="https://picsum.photos/seed/map/800/400"
              alt="Карта"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
