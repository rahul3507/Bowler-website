import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={6}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1, // 1 slide for screens 0px to 479px
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2, // 2 slides for screens 480px to 500px
          spaceBetween: 10,
        },
        501: {
          slidesPerView: 3, // 3 slides above 500px
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <SwiperSlide key={index}>
          <img
            alt={`Slide ${index + 1}`}
            src={`https://picsum.photos/seed/picsum${index}/300`}
            className="w-full h-[180px] object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;