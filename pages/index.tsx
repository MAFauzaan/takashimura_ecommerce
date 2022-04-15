import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import { Card, Typography, Row, Col, Divider, Select } from 'antd'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { DownOutlined } from '@ant-design/icons';
import { useDynamicScreen } from '../common/hooks/useDynamicScreen';
import { ItemsList, IitemList } from '../DUMMY/OptionsList';

import "swiper/css";
import "swiper/css/pagination";
import style from '../styles/_index.module.scss'
import ItemCard from '../components/ItemCard/ItemCard';

const { Text } = Typography;
const { Option } = Select;

interface IdisplayImage {
  name: string,
  imgUrl: string
}

interface ISelectedOption {
  name: string,
  description: any
}

const Home: NextPage = () => {
  const { windowWidth } = useDynamicScreen();


  const [displayImage, setDisplayImage] = useState<IdisplayImage>({
    name: '',
    imgUrl: ''
  })

  const [selected, setSelected] = useState<ISelectedOption>({
    name: 'Mukena',
    description: ''
  })

  const onChangeColSpan = (name: string) => {
    let colAmount;

    if (name === 'options' && windowWidth >= 1100) {
      colAmount = 12;
    } else {
      colAmount = 12;
    }

    return colAmount;
  }

  const onSectionOptionsClasses = () => {
    let classes;
    if (windowWidth >= 1280) {
      classes = 'p-40'
    } else if (windowWidth < 1280 && windowWidth > 600) {
      classes = 'pt-32 px-10'
    } else {
      classes = 'pt-32 px-10 !block'
    }

    return classes;
  }

  const OptionsHeader = () => (
    <>
      <Text className={`${windowWidth >= 1100 ? 'text-[24px]' : 'text-[20px]'} block`}>PRODUK KAMI</Text>
      <Text className={`${windowWidth >= 1100 ? 'text-[40px]' : 'text-[32px]'} block font-bold`}>Pilihan Untuk Kamu!!</Text>
    </>
  )

  const OptionsComponent = () => (
    <div className='mr-12'>
      {windowWidth > 1100 ?
        <>
          <OptionsHeader />
          <Row className={`mt-[40px]`}>
            {
              ItemsList.map((item: IitemList, index: any) => (
                <Col span={12} key={item.id} onMouseEnter={() => onChangeSelected(item.name, item.description)}>
                  <div className='w-[260px] mr-[10px] mb-5 p-4 hover:bg-[#F8F9FA] cursor-pointer'>
                    <Text className='text-[24px] block'>{item.name}</Text>
                    <Text className='text-[16px]'>{item.description}</Text>
                  </div>
                  {index !== ItemsList.length - 1 && index !== ItemsList.length - 2 && <Divider />}
                </Col>
              ))
            }
          </Row>
        </>
        :
        windowWidth >= 769 && windowWidth <= 1100 ?
          <>
            <Row>
              {
                ItemsList.map((item: IitemList) => (
                  <Col span={24} key={item.id} onMouseEnter={() => onChangeSelected(item.name, item.description)}>
                    <div className='w-[250px] mr-[10px] mb-5 py-[16px] hover:bg-[#F8F9FA] cursor-pointer'>
                      <Text className='text-[20px] block'>{item.name}</Text>
                      <Text className='text-[16px]'>{item.description}</Text>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </>
          :
          null
      }
    </div>
  )

  const OptionsDisplayImg = () => (
    <div className={style.displayImage}>
      <Text className='text-[32px] block'>{selected.name}</Text>
      <Text className='text-[24px] block'>{selected.description}</Text>
    </div>
  )

  const OptionsPhone = () => (
    <div className='py-20'>
      <OptionsHeader />
      {
        ItemsList.map((item: IitemList, index: any) => (
          <React.Fragment key={item.id} >
            <div id={item.id} className='mt-[56px] pb-[32px]'>
              {
                selected.name === item.name &&
                <div className={`${style.imgPopup} ${selected.name !== item.name ? style.disappear : ''} flex place-content-center place-items-center mb-[16px] relative overflow-hidden`}>
                  <OptionsDisplayImg />
                </div>
              }
              <div className='flex place-items-center cursor-pointer mb-[8px]' style={{ justifyContent: 'space-between ' }} onClick={() => onChangeSelected(item.name, item.description)}>
                <Text className='text-[24px]'>{item.name}</Text>
                <DownOutlined className='text-2xl' />
              </div>
              {
                selected.name === item.name &&
                <div className={`${style.descriptionPopup} ${selected.name !== item.name ? style.disappear : ''}`}>
                  <Text className='text-[16px]'>{item.description}</Text>
                </div>
              }
            </div>
            {index !== ItemsList[ItemsList.length] && <Divider />}
          </React.Fragment>
        ))
      }
    </div>
  )

  const onChangeSelected = (name: string, description: string) => {
    if (selected.name === name) {
      setSelected({ name: '', description: '' });
      return;
    }

    setSelected({ name, description })
  }

  return (
    <>
      <div className={`${style.hero} h-[calc(100vh_-_64px)] w-full bg-gray-500 hero flex place-content-center place-items-center text-center`} >
        <div className=''>
          <Text className='text-[56px] text-white font-bold block mb-[40px]'>Brand Fashion Otentik <br /> dan Berkualitas.</Text><br />
          <Text className='text-[20px] text-white font-bold underline hover:cursor-pointer'>PELAJARI LEBIH LANJUT</Text>
        </div>
      </div>
      <section id="options" className={onSectionOptionsClasses()}>
        <Row className={windowWidth <= 769 ? '!block' : 'flex'}>
          {
            windowWidth >= 1100 ?
              <>
                <Col span={onChangeColSpan('options')} className="flex justify-center items-center">
                  <OptionsComponent />
                </Col>
                <Col span={onChangeColSpan('display-img')} className="flex justify-end">
                  <OptionsDisplayImg />
                </Col>
              </>
              :
              windowWidth < 1100 && windowWidth >= 769 ?
                <>
                  <Col span={24} className='mb-16'>
                    <OptionsHeader />
                  </Col>
                  <Col span={onChangeColSpan('options')} className="flex justify-center items-center">
                    <OptionsComponent />
                  </Col>
                  <Col span={onChangeColSpan('display-img')} className="flex justify-end">
                    <OptionsDisplayImg />
                  </Col>
                </>
                :
                <OptionsPhone />
          }
        </Row>
      </section>
      <section className={`${windowWidth >= 1100 ? 'pl-48' : 'pl-5'} py-48 pr-0`}>
        <div className='flex justify-between mb-[48px]'>
          <Text className={windowWidth < 481 ? 'text-[32px]' : 'text-[40px]'}>Koleksi Kami</Text>
          <Text
            className={
              `${windowWidth < 769 ? 'text-[16px] mr-4'
                : windowWidth >= 769 ? 'text-[20px] mr-48' : ''} 
              flex place-items-center`
            }
          >
            Lihat Semua Koleksi
          </Text>
        </div>
        <div className='flex justify-center'>
          <Swiper
            spaceBetween={30}
            slidesPerView={
              windowWidth >= 1600 ? 5 : windowWidth > 1280 && windowWidth < 1600 ? 4 : windowWidth <= 1280 && windowWidth > 900 ? 3
                : windowWidth <= 900 && windowWidth > 769 ? 2 : 1
            }
            className='mb-[64px]'
          >
            {
              ItemsList[0].items.map((item: any) => {
                return (
                  <SwiperSlide key={item.id} className='flex place-content-center place-items-center'>
                      <ItemCard item={item}/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>        </div>
      </section>
    </>
  )
}

export default Home;
