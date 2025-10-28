'use client'

import {useRef} from "react";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';

import {sliderData} from "@/components/pages/home/slider";
import SliderCard from "@/components/pages/home/SliderCard";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// icons
import ArrowRightIcon from "@/components/icons/ArrowRight.Icon";
import ArrowLeftIcon from "@/components/icons/ArrowLeft.Icon";

const SliderHome = () => {

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="bg-gray50 py-10 md:yb-[61px] relative ">

            <div className="relative">
                <div
                    className="w-full h-[222px] md:h-[240px] bg-gradient-to-t from-primary-main to-secondary-main absolute top-0 right-0 left-0 z-0"/>

                <div className="relative pt-6 z-10 pr-4 sm:px-6 max-w-[960px] xl:px-0 2xl:max-w-[1200px] mx-auto">
                    <h3 className="text-center text-red-50 mb-8 md:mb-6 font-bold text-lg md:text[20px]">موانع رایج در
                        دریافت
                        خدمات تولید محتوا برای
                        کسب‌وکارها</h3>

                    <div className="relative">

                        <div className="hidden md:block absolute z-10 w-full  top-1/2 transform -translate-y-1/2">
                            <div
                                className="btn-header w-8 h-8 absolute right-[-16px] bg-white1 top-1/2 transform -translate-y-1/2 z-50"
                                onClick={() => swiperRef.current?.slidePrev()}><ArrowRightIcon/></div>
                            <div
                                className="btn-header w-8 h-8 absolute left-[-16px] bg-white1 top-1/2 transform -translate-y-1/2 z-30"
                                onClick={() => swiperRef.current?.slideNext()}><ArrowLeftIcon/></div>
                        </div>

                        <div className="w-full h-[198px] md:h-[226px] z-0">
                            <Swiper
                                loop={true}
                                spaceBetween={16}
                                slidesPerView={1.5}
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 3000, // 3 ثانیه
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                onSwiper={(swiper: SwiperType) => {
                                    swiperRef.current = swiper;
                                }}
                                // onSlideChange={() => console.log('slide change')}
                                // onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 16,
                                    },
                                    640: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 16,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 24,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 24,
                                    }
                                }}
                            >
                                {sliderData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <SliderCard slide={item}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default SliderHome;