import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import { Card, Typography, Row, Col } from 'antd'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useDynamicScreen } from '../hooks/useDynamicScreen';

import "swiper/css";
import "swiper/css/pagination";
import style from '../styles/_index.module.scss'

const { Text } = Typography;

const Home: NextPage = () => {
  const { windowWidth } = useDynamicScreen();

  const onChangeColSpan = () => {
    let colAmount;

    if (windowWidth < 768) {
      colAmount = 24
    } else {
      colAmount = 12;
    }

    return colAmount;
  }

  const onSectionOptionsClasses = () => {
    let classes;
    if (windowWidth > 769) {
      classes = 'p-48'
    } else if (windowWidth < 768 && windowWidth > 481) {
      classes = 'p-10'
    } else {
      classes = 'p-5'
    }

    return classes;
  }

  return (
    <>
      <div className='h-[calc(100vh_-_64px)] bg-gray-500'>
        <p>Hero Section</p>
      </div>
      <section id="options" className={onSectionOptionsClasses()}>
        <Row>
          <Col span={onChangeColSpan()}>
            test
          </Col>
          <Col span={onChangeColSpan()}>
            <div className='bg-gray-500 w-full'>
              test2
            </div>
          </Col>
        </Row>
      </section>
      <section className={`${windowWidth > 769 ? 'pl-48' : 'pl-5'} py-48 pr-0`}>
        <div className='flex justify-between mb-[48px]'>
          <Text className={windowWidth < 481 ? 'text-[32px]' : 'text-[40px]'}>Koleksi Kami</Text>
          <Text 
            className={
              `${windowWidth < 481 ? 'text-[16px]' 
              : windowWidth > 481 ? 'text-[20px] mr-48' : ''} 
              flex place-items-center`
            }
          >
            Lihat Semua Koleksi
          </Text>
        </div>
        <div className='flex justify-center'>
          <Swiper
            slidesPerView={5}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"    
          >
            <SwiperSlide>
              <Card className='bg-gray-500 xl:h-[40rem] xl:w-[28.5rem]'>  </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-gray-500 xl:h-[40rem] xl:w-[28.5rem]'>  </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-gray-500 xl:h-[40rem] xl:w-[28.5rem]'>  </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-gray-500 xl:h-[40rem] xl:w-[28.5rem]'>  </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-gray-500 xl:h-[40rem] xl:w-[28.5rem]'>  </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='bg-gray-500 xl:h-[40rem] xl:w-[28.5rem]'>  </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Home
