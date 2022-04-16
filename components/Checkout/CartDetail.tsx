import React from 'react';
import { Col, Row, Typography } from 'antd';
import ItemMiniDescription from '../ItemMiniDescription/ItemMiniDescription';
import { checkCartItems } from '../../store/reducers/cartSlice';
import { useAppSelector } from '../../store/hooks';

const { Text } = Typography;

const CartDetail = () => {

    const cartItems = useAppSelector(checkCartItems);
    const subtotal = cartItems.reduce((a, b) => a.subTotal + b.subTotal);

    return (
        <div className='bg-[#F8F9FA] min-h-[700px] w-full overflow-y-scroll py-[32px] px-[16px] mt-[45px]'>
            {
                cartItems.map((item: any) => {
                    return (
                        <Row key={item.id} className='mb-[16px]'>
                            <Col span={14}>
                                <ItemMiniDescription itemName={item.itemName} itemPrice={item.price} />
                            </Col>
                            <Col span={4} className='flex justify-center place-items-center'>
                                <div className='rounded-full bg-[#0E8244] w-[24px] h-[24px]  text-center'>
                                    <Text className='block text-[16px] text-white'>{item.amount}</Text>
                                </div>
                            </Col>
                            <Col span={6} className='text-right'>
                                <div>
                                    <Text className='text-[16px] block font-semibold'>{`Rp ${item.subTotal}`}</Text>
                                    <Text className='text-[16px] block'>Hapus</Text>
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }
            <div className='border-t-2 border-b-2 py-[16px]'>
                <Row>
                    <Col span={12}>
                        <Text className='text-[16px] text-left'>Subtotal</Text>
                    </Col>
                    <Col span={12}>
                        <Text className='text-[16px] text-right'>{subtotal}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Text className='text-[16px] text-left'>Ongkos Pengiriman</Text>
                    </Col>
                    <Col span={12}>
                        <Text className='text-[16px] text-right'>Gratis</Text>
                    </Col>
                </Row>
            </div>
            <div className='mt-[24px]'>
                <Row className='text-[16px] font-semibold'>
                    <Col span={12} className='text-left'>
                        <Text>Total Biaya</Text>
                    </Col>
                    <Col span={12} className='text-right'>
                        <Text>{subtotal}</Text>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CartDetail;