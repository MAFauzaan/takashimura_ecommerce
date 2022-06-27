import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import { Card, Row, Col, Divider, Select } from 'antd';
import { Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router';
import { DownOutlined } from '@ant-design/icons';
import { useDynamicScreen } from '../common/hooks/useDynamicScreen';
import { ItemsList, IitemList } from '../DUMMY/OptionsList';

import "swiper/css";
import "swiper/css/pagination";
import style from '../styles/_index.module.scss'
import ItemCard from '../components/ItemCard/ItemCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkCartItems, onChangeCartItems } from '../store/reducers/userSlice';

interface IdisplayImage {
  name: string,
  imgUrl: string
}

interface ISelectedOption {
  name: string,
  description: any
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:5000/get-products', {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  return {
    props: {
      data: result.data,
    }
  };
};

const Home: NextPage = ({ data, user }: any) => {
  const cartItems = useAppSelector(checkCartItems)
  const dispatch = useAppDispatch()
  const { windowWidth } = useDynamicScreen();
  const { replace, push } = useRouter();
  const slicedProducts = data.slice(0, 8);

  const [selected, setSelected] = useState<ISelectedOption>({
    name: 'Mukena',
    description: ''
  })

  const onChangeColSpan = (name: string) => {
    let colAmount;

    if (name === 'options' && windowWidth >= 1100) {
      colAmount = 6;
    } else {
      colAmount = 6;
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
      <Typography className={`${windowWidth >= 1100 ? 'text-[24px]' : 'text-[20px]'} block text-[#001219]`}>PRODUK KAMI</Typography>
      <Typography className={`${windowWidth >= 1100 ? 'text-[40px]' : 'text-[32px]'} block font-bold text-[#001219]`}>Pilihan Untuk Kamu!!</Typography>
    </>
  )

  const OptionsComponent = () => (
    <div className='mr-12'>
      {windowWidth > 1100 ?
        <>
          <OptionsHeader />
          <Grid container className={`mt-[40px]`}>
            {
              ItemsList.map((item: IitemList, index: any) => (
                <Grid item xs={6} key={item.id} onMouseEnter={() => onChangeSelected(item.name, item.description)}>
                  <div className='w-[260px] mr-[10px] mb-5 p-4 hover:bg-[#F8F9FA] cursor-pointer' onClick={() => push(`/products/${item.name.toLowerCase()}?page=1`)} >
                    <Typography className='text-[24px] block'>{item.name}</Typography>
                    <Typography className='text-[16px]'>{item.description}</Typography>
                  </div>
                </Grid>
              ))
            }
          </Grid>
        </>
        :
        windowWidth >= 769 && windowWidth <= 1100 ?
          <>
            <Row>
              {
                ItemsList.map((item: IitemList) => (
                  <Grid xs={12} key={item.id} onMouseEnter={() => onChangeSelected(item.name, item.description)}>
                    <div className='w-[250px] mr-[10px] mb-5 py-[16px] hover:bg-[#F8F9FA] cursor-pointer'>
                      <Typography className='text-[20px] block'>{item.name}</Typography>
                      <Typography className='text-[16px]'>{item.description}</Typography>
                    </div>
                  </Grid>
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
      <Typography className='text-[32px] block'>{selected.name}</Typography>
      <Typography className='text-[24px] block'>{selected.description}</Typography>
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
                <Typography className='text-[24px]'>{item.name}</Typography>
                <DownOutlined className='text-2xl' />
              </div>
              {
                selected.name === item.name &&
                <div className={`${style.descriptionPopup} ${selected.name !== item.name ? style.disappear : ''}`}>
                  <Typography className='text-[16px]'>{item.description}</Typography>
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

  const onChangeSelectedItem = (item: any) => {
    push(`/products/${item.category}/${item.productid}`)
  }

  useEffect(() => {
    const getCartItemsData = async() => {
      if (cartItems.length > 0) {
        const mappedItems = cartItems.map((v: any) => v.productid)
        const promises = await Promise.all(mappedItems.map((v: any) => fetch(`http://localhost:5000/get-product/${v}`)));
        const products = await Promise.all(promises.map((v: any) => v.json()))
        const reconstructProducts = products.map((v: any) => v.data).flat()

        const newCartItems = cartItems.map((v: any) => {
          const findSameId = reconstructProducts.find((u: any) => u.productid === v.productid);
          const findSameVariant = findSameId.sizevariants.find((z: any) => z.size === v.detail.size);

          return {
            ...v,
            photos: findSameId.photos,
            stock: findSameVariant.stock
          }
        })
        dispatch(onChangeCartItems(newCartItems))
      } 
    };
  
    if (localStorage.getItem("token")) {
      getCartItemsData()
    }
  }, []);

  return (
    <>
      <div className={`${style.hero} h-[calc(100vh_-_64px)] w-full bg-gray-500 hero flex place-content-center place-items-center text-center`} >
        <div className=''>
          <Typography className='text-[56px] text-white font-bold block mb-[40px]'>Brand Fashion Otentik <br /> dan Berkualitas.</Typography><br />
          <Typography className='text-[20px] text-white font-bold underline hover:cursor-pointer'>PELAJARI LEBIH LANJUT</Typography>
        </div>
      </div>
      <section id="options">
        <div className='absolute'>
          <Image src="/Ta.png" width={354} height={236} alt="logo" className='absolute' />
        </div>
        <Grid container className={`${windowWidth <= 769 ? '!block' : 'flex'} ${onSectionOptionsClasses()} relative`}>
          {
            windowWidth >= 1100 ?
              <>
                <Grid xs={onChangeColSpan('options')} className="flex justify-center items-center">
                  <OptionsComponent />
                </Grid>
                <Grid xs={onChangeColSpan('display-img')} className="flex justify-end">
                  <OptionsDisplayImg />
                </Grid>
              </>
              :
              windowWidth < 1100 && windowWidth >= 769 ?
                <>
                  <Grid item xs={12} className='mb-16'>
                    <OptionsHeader />
                  </Grid>
                  <Grid item xs={onChangeColSpan('options')} className="flex justify-center items-center">
                    <OptionsComponent />
                  </Grid>
                  <Grid item xs={onChangeColSpan('display-img')} className="flex justify-end">
                    <OptionsDisplayImg />
                  </Grid>
                </>
                :
                <OptionsPhone />
          }
        </Grid>
      </section>
      <section className={`${windowWidth >= 1100 ? 'pl-48' : 'pl-5'} py-48 pr-0`}>
        <div className='flex justify-between mb-[48px]'>
          <Typography className={windowWidth < 481 ? 'text-[32px]' : 'text-[40px]'}>Koleksi Kami</Typography>
          <Typography
            className={
              `${windowWidth < 769 ? 'text-[16px] mr-4'
                : windowWidth >= 769 ? 'text-[20px] mr-48' : ''} 
              flex place-items-center`
            }
          >
            Lihat Semua Koleksi
          </Typography>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={
              windowWidth >= 1100 ? 5 : windowWidth < 1100 && windowWidth >= 769 ? 4
                : windowWidth < 769 && windowWidth <= 600 ? 3 : 2
            }
            className='mb-[64px]'
          >
            {
              slicedProducts.map((item: any) => {
                return (
                  <SwiperSlide key={item.id} className='flex place-content-center place-items-center'>
                    <ItemCard item={item} onChangeSelectedItem={onChangeSelectedItem} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Home;
