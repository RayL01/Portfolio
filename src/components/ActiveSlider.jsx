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
        <div className="flex items-center justify-center flex-col h-[900px] bg-slate-400">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 5,
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
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="flex flex-col gap-6 mb-20 group relative  text-white rounded-xl px-6 py-8   md:h-[250px] md:w-[200px]  lg:h-[300px] lg:w-[220px] xl:h-[400px] xl:w-[350px] overflow-hidden cursor-pointer">
                            <Image
                                src={item.backgroundImage}
                                alt={`Image for ${item.title}`} // 提供一个描述性的 alt 属性
                                layout="fill"
                                objectFit="cover"
                                // className="absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">
                                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                                <p className="lg:text-[18px]">{item.content} </p>
                            </div>
                            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default ActiveSlider;