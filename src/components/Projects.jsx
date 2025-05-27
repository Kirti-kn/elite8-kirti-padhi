import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import { useState, useRef, useEffect } from 'react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      .swiper-pagination-bullet {
        background-color: rgba(255, 255, 255, 0.8) !important;
        opacity: 1 !important;
      }
      .swiper-pagination-bullet-active {
        background-color: #22d3ee !important;
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  return (
    <div className="min-h-screen w-full text-white py-12">
      <h2 className="text-4xl text-center mb-10 md:my-8 font-bold">Projects</h2>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center relative">
        <div className="custom-pagination mb-6 order-1 md:order-2 flex justify-center" />

        <Swiper
          ref={swiperRef}
          direction="horizontal"
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.25 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.75 },
          }}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          pagination={{ el: '.custom-pagination', clickable: true }}
          modules={[Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="order-2 md:order-1 h-full w-full"
        >
          {PROJECTS.map((project, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => swiperRef.current?.swiper.slideToLoop(i)}
                className={`cursor-pointer transition-all duration-500 flex justify-center perspective-[1200px] ${
                  i === activeIndex
                    ? 'scale-100 blur-0 rotate-0 z-30 transform-style-flat'
                    : i < activeIndex
                    ? 'scale-90 blur-sm z-10 transform rotate-y-[-30deg]'
                    : 'scale-90 blur-sm z-10 transform rotate-y-[30deg]'
                }`}
              >
                <ProjectCard {...project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
