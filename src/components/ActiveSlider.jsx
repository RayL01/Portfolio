import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from '../constants/constant.js'
import Image from 'next/image';
const ActiveSlider = () => {
    return (
        <div className="  sm:text-xs lg:text-lg">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[100%] lg:max-w-[100%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title} onClick={() => handleSlideClick(item)}>
                        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8   h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                            <Image
                                src={item.backgroundImage}
                                alt={`Image for ${item.title}`}
                                layout="fill"
                                objectFit="cover"

                            />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">
                                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                                <p className="text-xs lg:text-xl">{item.content} </p>
                            </div>
                            <RxArrowTopRight  className="absolute    bottom-2 left-2 sm:w-[15px] sm:h-[15px]  lg:w-[35px] lg:h-[35px]  text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
function handleSlideClick(item) {

    // Check if the item has a URL
    if (item.url) {
        // Open the URL in a new tab
        window.open(item.url, '_blank');
    }

}
export default ActiveSlider;