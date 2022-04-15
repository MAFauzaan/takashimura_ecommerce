import React from 'react';
import { Breadcrumb, Typography, Row, Col, Rate } from 'antd';
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDynamicScreen } from '../../../../common/hooks/useDynamicScreen';
import { useDetailItem } from '../../hooks/useDetailItem';
import { capitalizeFirstLetter } from '../../../../common/helpers/textHelpers';
import { Ireviews, ItemsList } from '../../../../DUMMY/OptionsList';
import "swiper/css";
import ItemCard from '../../../../components/ItemCard/ItemCard';

const { Text } = Typography;

const DetailPage = () => {
    const { windowWidth } = useDynamicScreen();
    const { selectedSize, onChangeSelectedSize, amount, onChangeSetAmount } = useDetailItem();
    const router = useRouter();
    const containerPadding = () => {
        if (windowWidth >= 1100) {
            return 'px-[120px] py-[32px]'
        } else if (windowWidth >= 769 && windowWidth < 1100) {
            return 'p-[24px]'
        }
        return 'p-[16px]'
    }

    const dummy = ['1', '2', '3', '4', '5', '6', '7'];
    const dummyItem = ItemsList[0].items[0];

    return (
        <>
            <div className='bg-[#F8F9FA] text-center h-[32px] flex place-content-center place-items-center'>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href='/products'>Products</Breadcrumb.Item>
                    <Breadcrumb.Item href={`/products/${router.query.type}`}>{capitalizeFirstLetter(router.query.type)}</Breadcrumb.Item>
                    <Breadcrumb.Item>{router.query.detail}</Breadcrumb.Item>                    
                </Breadcrumb>
            </div>
            <div className={`${containerPadding()}`}>
                <Row>
                    <Col span={windowWidth > 800 ? 9 : 24} className='text-center'>
                        <div className='w-full'>
                            <Image src='/dummyImage.png' height={480} width={480} alt='image' />
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                className='mt-[16px] max-w-[480px]'
                            >
                                {
                                    dummy.map((v: any) => (
                                        <SwiperSlide key={v} className='w-[104px] h-[104px]'>
                                            <Image src='/dummyImage.png' height={104} width={104} alt='image' />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </Col>
                    <Col span={windowWidth > 800 ? 15 : 24} className={`${windowWidth > 600 ? 'pl-[16px]' : ''} pt-5`}>
                        <div className='grid'>
                            <Text className='text-[32px] font-semibold'>{dummyItem.name}</Text>
                            <Text className='text-[16px] text-[#4F555B] mb-[24px]'>{capitalizeFirstLetter(router.query.type)}</Text>
                            <Text className='text-[24px] font-semibold'>{`Rp ${dummyItem.sizes[0].price}`}</Text>
                        </div>
                        <div className='mt-[24px]'>
                            <Text className='text-[16px] text-[#4F555B]'>{`Ukuran : ${selectedSize}`}</Text>
                            <div className='mt-[8px] flex gap-[10px]'>
                                {
                                    dummyItem.sizes.map((v: any) => {
                                        return (
                                            <div
                                                key={v.size}
                                                className={`${selectedSize === v.size ? `bg-[#FFEEF2] border-[#BD0029]` : ''} w-[56px] h-[40px] flex place-items-center justify-center border hover:cursor-pointer`}
                                                onClick={() => onChangeSelectedSize(v.size)}
                                            >
                                                <Text className={`${selectedSize === v.size ? 'text-[#BD0029]' : ''} text-[16px] text-[#4F555B]`}>{v.size}</Text>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Row className='mt-[40px]'>
                            <Col span={windowWidth < 600 ? 5 : 4}>
                                <div className='mb-[12px]'>
                                    <Row className='w-full h-[48px] text-center border-2 rounded-md'>
                                        <Col span={8} className='flex place-items-center justify-center hover:cursor-pointer' onClick={() => onChangeSetAmount('reduce')}>
                                            <MinusOutlined className='text-[16px]' />
                                        </Col>
                                        <Col span={8} className='flex place-items-center justify-center'>
                                            <Text className='text-[16px]'>{amount}</Text>
                                        </Col>
                                        <Col span={8} className='flex place-items-center justify-center hover:cursor-pointer' onClick={() => onChangeSetAmount('addition')}>
                                            <PlusOutlined className='text-[16px]' />
                                        </Col>
                                    </Row>
                                </div>
                                <Text className='text-[16px]'>Sisa stok: 12</Text>
                            </Col>
                            <Col span={windowWidth < 600 ? 19 : 20} className='pl-[16px]'>
                                <div className='h-[48px] max-w-[320px] flex text-center place-items-center place-content-center bg-[#BD0029]'>
                                    <Text className='text-[16px] text-[#ffff] font-semibold'>Tambah di Keranjang</Text>
                                </div>
                            </Col>
                        </Row>
                        <div className='border-t-2 mt-[32px] pt-[16px]'>
                            <Text className='text-[16px] font-semibold block'>Deskripsi Produk</Text>
                            <Text className='mt-[16px] block text-[14px]'>
                                Memperkenalkan Signature Rumi , Signature Rumi didesain dari motif bunga moorish, dengan kombinasi 12 bentuk oval di sekeliling mukena. Kata ‘Rumi’ terinspirasi dari renda yang memiliki garis lurus dan menyerupai Pilar Romawi.

                                Menggunakan motif geometris yang sama berulang kali pada bagian atas dan bawah renda dengan sulaman halus dan vertikal yang rapi untuk mempertahankan sentuhan minimalis.
                            </Text>
                        </div>
                        <div className='border-t-2 mt-[32px] pt-[16px]'>
                            <Text className='text-[16px] font-semibold block'>Ulasan Produk</Text>
                            <div className='mt-[35px]'>
                                {
                                    dummyItem.reviews.map((review: Ireviews) => {
                                        return (
                                            <Row key={review.description}>
                                                <Col span={8} className='flex'>
                                                    <Rate disabled defaultValue={review.stars} />
                                                </Col>
                                                {
                                                    windowWidth > 800 ?
                                                        <>
                                                            <Col span={8} className='flex'>
                                                                <Text className='text-[14px]'>{review.description}</Text>
                                                            </Col>
                                                            <Col>
                                                                <Text className='text-[14px]'>{review.date.toISOString()}</Text>
                                                            </Col>
                                                        </>
                                                        :
                                                        <>
                                                            <Col span={12} className='flex place-item-end'>
                                                                <Text className='text-[14px]'>{review.date.toISOString()}</Text>
                                                            </Col>
                                                            <Col span={24} className='flex place-item-end'>
                                                                <Text className='text-[14px]'>{review.description}</Text>
                                                            </Col>
                                                        </>
                                                }
                                            </Row>
                                        )
                                    })
                                }
                                <div className='mt-[46px] pb-[16px] border-b-2'>
                                    <Text underline className='text-[14px]'>Tampilkan lebih banyak</Text>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className='mb-[24px]'>
                <Col span={24} className="flex place-items-center text-center justify-center">
                    <Text className='text-[24px] font-semibold'>Anda Mungkin Menyukainya</Text>
                </Col>
            </Row>
            <Swiper
                spaceBetween={30}
                slidesPerView={
                    windowWidth >= 1600 ? 5 : windowWidth > 1280 ? 4 : windowWidth <= 1280 && windowWidth > 900 ? 3
                        : windowWidth <= 900 && windowWidth > 769 ? 2 : 1
                }
                className='mb-[64px]'
            >
                {
                    ItemsList.map((item: any) => {
                        return (
                            <SwiperSlide key={item.id} className='flex place-content-center place-items-center'>
                                <ItemCard item={dummyItem} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default DetailPage;