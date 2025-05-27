import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import profilePicLaptop from "../assets/profilePicLaptop.png";
import { ABOUT_TEXT } from '../constants';
import Technologies from './Technologies';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const creativeEffect = {
  prev: {
    translate: ['-100%', 0, 0],
    opacity: 0.5,
  },
  next: {
    translate: ['100%', 0, 0],
    opacity: 0.5,
  },
};

export default function About() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mt-8 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      <div className="w-full h-3/4 relative">
        <div ref={prevRef} className="absolute top-4 left-4 z-50 text-white text-3xl cursor-pointer">‹</div>
        <div ref={nextRef} className="absolute top-4 right-4 z-50 text-white text-3xl cursor-pointer">›</div>

        <Swiper
          effect="creative"
          grabCursor={true}
          loop={true}
          modules={[EffectCreative, Navigation]}
          creativeEffect={creativeEffect}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="h-full w-full"
        >
          <SwiperSlide className="h-full w-full bg-gradient-to-t from-zinc-500 to-slate-900 p-4">
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
              <img
                src={profilePicLaptop}
                alt="about"
                className="w-full lg:w-1/3 h-auto rounded-2xl shadow-lg mb-6 lg:mb-0"
              />
              <p className="w-full lg:w-2/3 text-justify text-sm sm:text-base md:text-md p-4 overflow-auto h-full md:flex md:items-center">
                {ABOUT_TEXT}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-full w-full bg-gradient-to-t from-zinc-500 to-slate-900 p-4">
            <div className="h-full w-full overflow-auto">
              <Technologies />
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-full w-full bg-gradient-to-t from-zinc-500 to-slate-900">
            <div className="h-full w-full flex flex-col items-center justify-center space-y-6 overflow-auto">
              <h3 className="text-2xl md:text-3xl font-semibold">Connect with me</h3>
              <div className="flex space-x-8 text-5xl text-cyan-400">
                <a href="https://github.com/Kirti-kn" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/kirti-padhi-b83614245/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://t.me/Kirti_padhi" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
