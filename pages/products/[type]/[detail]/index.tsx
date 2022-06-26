import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid, Rating, Breadcrumbs, Typography } from '@mui/material'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import "swiper/css";
import { useDynamicScreen } from '../../../../common/hooks/useDynamicScreen';
import { useDetailItem } from '../../hooks/useDetailItem';
import { capitalizeFirstLetter } from '../../../../common/helpers/textHelpers';
import ItemCard from '../../../../components/ItemCard/ItemCard';

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { detail } = params
    const response = await fetch(`http://localhost:5000/get-product/${detail}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();

    return {
        props: {
            data: result.data.rows
        }
    };
};


const DetailPage = ({ data }: any) => {
    const router = useRouter();
    const { windowWidth } = useDynamicScreen();
    const {
        selectedSize, onChangeSelectedSize, amount,
        onChangeSetAmount, stock, price,
        onClickAddToCart
    } = useDetailItem(data[0]);
    const usedData = data[0];
    const availableSizes = usedData.sizevariants.filter((v: any) => v.sku);

    const [displayedImg, setDisplayedImg] = useState<string>(usedData?.photos[0]?.thumbUrl);
    console.log(data)
    const containerPadding = () => {
        if (windowWidth >= 1100) {
            return 'px-[120px] py-[32px]'
        } else if (windowWidth >= 769 && windowWidth < 1100) {
            return 'p-[24px]'
        }
        return 'p-[16px]'
    }

    const onChangeDisplayImg = (thumbnailUrl: any) => {
        setDisplayedImg(thumbnailUrl)
    };

    useEffect(() => {
        if (data) {
            setDisplayedImg(data[0].photos[0].thumbUrl)
        }
    }, [data]);

    return (
        <>
            <div className='bg-[#F8F9FA] text-center h-[32px] flex place-content-center place-items-center'>
                <Breadcrumbs separator=">">
                    <Link key="home" href="/" passHref={true}><Typography className='text-[16px]'>Home</Typography></Link>
                    <Link key="products" href="/products" passHref={true}><Typography className='text-[16px]'>products</Typography></Link>
                    <Link href={`/products/${usedData?.category.toLowerCase()}?page=1`} passHref>
                        <Typography className='text-[16px]'>{capitalizeFirstLetter(router.query.type)}</Typography>
                    </Link>
                    <Link href={`/products/${usedData?.category.toLowerCase()}/${router.query.detail}`} passHref>
                        <Typography className='text-[16px]'>{capitalizeFirstLetter(usedData?.productname)}</Typography>
                    </Link>
                </Breadcrumbs>
            </div>
            <div className={`${containerPadding()}`}>
                <Grid container>
                    <Grid item xs={windowWidth > 800 ? 4 : 12} className='text-center'>
                        <div className='w-full'>
                            <Image src={displayedImg} height={480} width={480} alt='image' />
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                className='mt-[16px] max-w-[480px]'
                            >
                                {
                                    usedData?.photos?.map((v: any) => (
                                        <SwiperSlide key={v} className='w-[104px] h-[104px]' onClick={() => onChangeDisplayImg(v.thumbUrl)}>
                                            <Image src={v?.thumbUrl} height={104} width={104} alt='image' />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </Grid>
                    <Grid item xs={windowWidth > 800 ? 8 : 12} className={`${windowWidth > 600 ? 'pl-[16px]' : ''} pt-5`}>
                        <div className='grid'>
                            <Typography className='text-[32px] font-semibold'>{usedData.productname}</Typography>
                            <Typography className='text-[16px] text-[#4F555B] mb-[24px]'>{capitalizeFirstLetter(router.query.type)}</Typography>
                            <Typography className='text-[24px] font-semibold'>{`Rp ${price}`}</Typography>
                        </div>
                        <div className='mt-[24px]'>
                            <Typography className='text-[16px] text-[#4F555B]'>{`Ukuran : ${selectedSize}`}</Typography>
                            <div className='mt-[8px] flex gap-[10px]'>
                                {
                                    availableSizes &&
                                    availableSizes?.map((v: any) => {
                                        return (
                                            <div
                                                key={v.size}
                                                className={`${selectedSize === v.size ? `bg-[#FFEEF2] border-[#BD0029]` : ''} w-[56px] h-[40px] flex place-items-center justify-center border hover:cursor-pointer`}
                                                onClick={() => onChangeSelectedSize(v.size)}
                                            >
                                                <Typography className={`${selectedSize === v.size ? 'text-[#BD0029]' : 'text-[#4F555B]'} text-[16px] `}>{v.size}</Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-[40px] flex'>
                            <div className='inline-block'>
                                <div className='mb-[12px]'>
                                    <Grid container className='w-[150px] h-[48px] text-center border-2 rounded-md'>
                                        <Grid item xs={4} className='flex place-items-center justify-center hover:cursor-pointer' onClick={() => onChangeSetAmount('reduce')}>
                                            <MinusOutlined className='text-[16px]' />
                                        </Grid>
                                        <Grid item xs={4} className='flex place-items-center justify-center'>
                                            <Typography className='text-[16px]'>{amount}</Typography>
                                        </Grid>
                                        <Grid item xs={4} className='flex place-items-center justify-center hover:cursor-pointer' onClick={() => onChangeSetAmount('addition')}>
                                            <PlusOutlined className='text-[16px]' />
                                        </Grid>
                                    </Grid>
                                </div>
                                <Typography className='text-[16px]'>Sisa stok: {stock}</Typography>
                            </div>
                            <div className='pl-[16px] inline-block'>
                                <div 
                                    className='h-[48px] max-w-[320px] py-[16px] px-[20px] flex text-center place-items-center place-content-center bg-[#BD0029]'
                                    onClick={onClickAddToCart}
                                >
                                    <Typography className='text-[16px] text-[#ffff] font-semibold'>Tambah di Keranjang</Typography>
                                </div>
                            </div>
                        </div>
                        <div className='border-t-2 mt-[32px] pt-[16px]'>
                            <Typography className='text-[16px] font-semibold block'>Deskripsi Produk</Typography>
                            <Typography className='mt-[16px] block text-[14px]'>{usedData.productdescription}</Typography>
                        </div>
                        <div className='border-t-2 mt-[32px] pt-[16px]'>
                            {
                                data?.reviews ?
                                    <>
                                        <Typography className='text-[16px] font-semibold block'>Ulasan Produk</Typography>
                                        <div className='mt-[35px]'>
                                            {
                                                data.reviews?.map((review: any) => {
                                                    return (
                                                        <Grid container key={review.description}>
                                                            <Grid item xs={4} className='flex'>
                                                                <Rating disabled defaultValue={review.stars} />
                                                            </Grid>
                                                            {
                                                                windowWidth > 800 ?
                                                                    <>
                                                                        <Grid item xs={4} className='flex'>
                                                                            <Typography className='text-[14px]'>{review.description}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={4}>
                                                                            <Typography className='text-[14px]'>{review.date.toISOString()}</Typography>
                                                                        </Grid>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <Grid item xs={12} className='flex place-item-end'>
                                                                            <Typography className='text-[14px]'>{review.date.toISOString()}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={24} className='flex place-item-end'>
                                                                            <Typography className='text-[14px]'>{review.description}</Typography>
                                                                        </Grid>
                                                                    </>
                                                            }
                                                        </Grid>
                                                    )
                                                })
                                            }
                                            <div className='mt-[46px] pb-[16px] border-b-2'>
                                                <Typography className='text-[14px] underline'>Tampilkan lebih banyak</Typography>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Typography></Typography>
                                    </>
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Grid container className='mb-[24px]'>
                <Grid xs={12} className="flex place-items-center text-center justify-center">
                    <Typography className='text-[24px] font-semibold'>Anda Mungkin Menyukainya</Typography>
                </Grid>
            </Grid>
            <Swiper
                spaceBetween={30}
                slidesPerView={
                    windowWidth >= 1600 ? 5 : windowWidth > 1280 ? 4 : windowWidth <= 1280 && windowWidth > 900 ? 3
                        : windowWidth <= 900 && windowWidth > 769 ? 2 : 1
                }
                className='mb-[64px]'
            >
                {
                    data.slice(0, 8).map((item: any) => {
                        return (
                            <SwiperSlide key={item.productid} className='flex place-content-center place-items-center'>
                                <ItemCard item={item} onChangeSelectedItem={() => {}}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default DetailPage;