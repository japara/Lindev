import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <p className="bg-gradient-to-b from-[#2662D6] to-[#3DB8B1] text-transparent bg-clip-text font-bold text-[36px] text-center mt-[160px]">
        ექსპერტები, რომლებიც წარმართავენ <br /> თქვენს გზას წარმატებისკენ
      </p>

      <Swiper
        spaceBetween={14}
        slidesPerView={3}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-[30px]"
      >
        <SwiperSlide>
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF]">
            <img className="" src="/profile1.svg" alt="Person 1" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">ნინო ბერიძე</h2>
              <h3 className="text-[14px]">App მარკეტერი</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative">
            <img className="" src="/profile2.svg" alt="Person 2" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">გიორგი ხუციშვილი</h2>
              <h3 className="text-[14px]">ინტერიერის დიზაინერი</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative">
            <img className="object-none" src="/profile3.svg" alt="Person 3" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">ვახო შენგელია</h2>
              <h3 className="text-[14px]">UI & UX დიზაინერი</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative">
            <img className="h-full" src="/profile2.svg" alt="Person 2" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">გიორგი ხუციშვილი</h2>
              <h3 className="text-[14px]">ინტერიერის დიზაინერი</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex object-fit rounded-2xl w-[302px] h-[355px] justify-center items-bottom slide-content bg-gradient-to-t from-[#2662D6] to-[#FFFFFF] relative">
            <img className="" src="/profile1.svg" alt="Person 1" />
            <div className="absolute text-white text-left font-bold bottom-[20px] left-[30px]">
              <h2 className="text-[20px]">ნინო ბერიძე</h2>
              <h3 className="text-[14px]">App მარკეტერი</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
