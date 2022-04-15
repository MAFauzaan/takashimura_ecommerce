import React, { useEffect } from 'react';
import { Drawer, Typography, Divider, Row, Col } from 'antd';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';
import { useAppSelector } from '../../store/hooks';
import { checkOpenDrawer, onCloseDrawer } from '../../store/reducers/cartSlice';

import { CartList, ICartList } from '../../DUMMY/CartList';
import style from './_Cart.module.scss'
import ItemMiniDescription from '../ItemMiniDescription/ItemMiniDescription';

const { Text } = Typography;

const Cart = () => {
    const { windowWidth } = useDynamicScreen();
    const dispatch = useDispatch();
    
    const isCartOpened: boolean = useAppSelector(checkOpenDrawer);

    useEffect(() => {
        if (isCartOpened){
            document.body.style.overflow = 'hidden';        
        } else {
            document.body.style.overflow = '';        
        }
    }, [isCartOpened]);


    return (
        <Drawer
            placement="right"
            width={windowWidth > 600 ? 556 : 380}
            onClose={() => dispatch(onCloseDrawer())}
            visible={isCartOpened}
            mask={false}
        >
            <div className='relative h-full w-full'>
                <div className='flex px-[16px] py-[20px] place-content-center font-semibold relative'>
                    <Text className='text-[24px]'>Keranjang</Text>
                    <div 
                        className='w-[32px] h-[32px] rounded-full bg-[#F8F9FA] absolute right-16 top-[25px] text-center flex place-items-center justify-center hover:cursor-pointer' 
                        onClick={() => dispatch(onCloseDrawer())}
                    >
                        <CloseOutlined className='text-[16px]' />
                    </div>
                </div>
                <Divider className='mt-0' />
                <div className='w-full h-[500px] overflow-scroll'>
                    {
                        CartList.map((cartItem: ICartList) => (
                            <React.Fragment key={cartItem.id}>
                                {
                                    windowWidth > 769 ?
                                        <Row className='px-[16px] mb-[32px]'>
                                            <Col span={12} className='flex'>
                                               <ItemMiniDescription itemName={cartItem.name} itemPrice={cartItem.price} />
                                            </Col>
                                            <Col span={6} className='flex place-items-center'>
                                                <Row className='w-full h-[40px] text-center border-2 rounded-md'>
                                                    <Col span={8} className='flex place-items-center justify-center'>
                                                        <MinusOutlined />
                                                    </Col>
                                                    <Col span={8} className='flex place-items-center justify-center'>
                                                        <Text>{cartItem.amount}</Text>
                                                    </Col>
                                                    <Col span={8} className='flex place-items-center justify-center'>
                                                        <PlusOutlined />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={6} className='text-right'>
                                                <Text className='text-[16px] font-semibold block mb-[16px]'>{`Rp${cartItem.price * cartItem.amount}`}</Text>
                                                <Text className='text-[14px] block'>Hapus</Text>
                                            </Col>
                                        </Row>
                                        :
                                        <Row className='px-[16px] mb-[32px]'>
                                            <Col span={24} className='flex mb-12'>
                                                <div className='w-[64px] h-[64px]  bg-red-700 inline-block' />
                                                <div className=' ml-[16px]'>
                                                    <Text className='text-[14px] block w-full mb-[8px]'>{cartItem.name}</Text>
                                                    <Text className='text-[14px]  font-medium'>{`Rp${cartItem.price}`}</Text>
                                                </div>
                                            </Col>
                                            <Col span={8} />
                                            <Col span={8} className='flex place-items-center'>
                                                <Row className='w-full h-[40px] text-center border-2 rounded-md'>
                                                    <Col span={8} className='flex place-items-center justify-center'>
                                                        <MinusOutlined />
                                                    </Col>
                                                    <Col span={8} className='flex place-items-center justify-center'>
                                                        <Text>{cartItem.amount}</Text>
                                                    </Col>
                                                    <Col span={8} className='flex place-items-center justify-center'>
                                                        <PlusOutlined />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={2} />
                                            <Col span={6} className='text-right'>
                                                <Text className='text-[16px] font-semibold block mb-[8px]'>{`Rp${cartItem.price * cartItem.amount}`}</Text>
                                                <Text className='text-[14px] block'>Hapus</Text>
                                            </Col>
                                        </Row>
                                }
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className={`${windowWidth > 600 ? 'w-[556px]' : 'w-[380px]' } fixed bottom-0 bg-[#F8F9FA] py-[24px] px-[16px]`}>
                    <Text className='block text-[16px] font-medium mb-[24px]'>Rangkuman Pembelian</Text>
                    <Row className='mb-[16px]'>
                        <Col span={12}>
                            <Text className='text-[14px] block'>Subtotal</Text>
                        </Col>
                        <Col span={12}>
                            <Text className='text-[14px] block text-right'>Rp 140.000</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Text className='text-[14px] block'>Ongkos Pengiriman</Text>
                        </Col>
                        <Col span={12}>
                            <Text className='text-[14px] block text-right'>Gratis</Text>
                        </Col>
                    </Row>
                    <Divider />
                    <Row className='font-semibold mb-[32px]'>
                        <Col span={12}>
                            <Text className='text-[14px] block'>Total Biaya</Text>
                        </Col>
                        <Col span={12}>
                            <Text className='text-[14px] block text-right'>Rp 140.000</Text>
                        </Col>
                    </Row>
                    <div className='w-full bg-[#BD0029] font-semibold text-center h-[48px] flex place-items-center justify-center cursor-pointer hover:bg-[#c52f4f]'>
                        <Text className='text-[#ffff] text-[16px] '>Masuk ke Pembayaran</Text>
                    </div>  
                </div>
            </div>
        </Drawer>
    )
}

export default Cart;