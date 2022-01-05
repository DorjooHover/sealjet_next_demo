import homeStyles from '../styles/Home.module.css'
import Script from 'next/script'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeSection = () => {
  return (
    <div id="home">
        <Swiper className={homeStyles.swiper1}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className={homeStyles.bla}><h1>asdfjkl</h1></div></SwiperSlide>
      <SwiperSlide><div className={homeStyles.bla}><h1>asdfjkl</h1></div></SwiperSlide>
      <SwiperSlide><div className={homeStyles.bla}><h1>asdfjkl</h1></div></SwiperSlide>
      <SwiperSlide><div className={homeStyles.bla}><h1>asdfjkl</h1></div></SwiperSlide>

      <style jsx>{`
        .swiper {
            width:600px;
            height:300px;
        }
      `}</style>
    </Swiper>
    </div>
  );
};

export default HomeSection