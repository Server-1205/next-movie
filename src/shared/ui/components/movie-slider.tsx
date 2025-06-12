/* eslint-disable @next/next/no-img-element */
"use client";

import { mockMovies } from "@/shared/consts/mock-data";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarRating } from "./star-rating";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function MovieSlider() {
  const popularMovies = mockMovies
    .filter((movie) => movie.rating > 4)
    .slice(0, 5);

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="movie-slider"
      >
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-slide rounded-2xl overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-slide-image"
              />
              <div className="movie-slide-content">
                <div className="container mx-auto">
                  <div className="max-w-2xl">
                    <h2
                      className="text-4xl font-bold mb-3 
                      transform translate-y-8 opacity-0 transition-all duration-700 
                      [.swiper-slide-active_&]:translate-y-0 
                      [.swiper-slide-active_&]:opacity-100"
                    >
                      {movie.title}
                    </h2>
                    <div
                      className="flex items-center gap-4 mb-4
                      transform translate-y-8 opacity-0 transition-all duration-700 delay-200
                      [.swiper-slide-active_&]:translate-y-0 
                      [.swiper-slide-active_&]:opacity-100"
                    >
                      <StarRating rating={movie.rating} readonly size="sm" />
                      <span className="text-sm">{movie.year}</span>
                      <span className="px-2 py-1 text-sm bg-purple-500 rounded-md">
                        {movie.genre}
                      </span>
                    </div>
                    <p
                      className="text-gray-300 line-clamp-2
                      transform translate-y-8 opacity-0 transition-all duration-700 delay-300
                      [.swiper-slide-active_&]:translate-y-0 
                      [.swiper-slide-active_&]:opacity-100"
                    >
                      {movie.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
