"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
;


const ProductSlider = () => {


  return (

    <section className="section-slide">
      <div className="">
        <div className="slick1">

          <Swiper 
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          
            <SwiperSlide> 
            <Link
            href="product"
          >
            <img src='images/1.jpg'  className='w-full'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide> 
            <Link
            href="product"
          >
            <img src='images/2.jpg'  className='w-full'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide> 
            <Link
            href="product"
          >
            <img src='images/3.jpg'  className='w-full'/>
            </Link>
            </SwiperSlide>




          </Swiper>

          

        </div>
      </div>
    </section>
  )
}

export default ProductSlider

