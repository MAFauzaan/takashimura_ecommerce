import React from 'react';
import { Row, Col, Typography, Divider, Checkbox } from 'antd';

const { Text } = Typography;

const Shipment = () => {
    return (
        <div>
            <div className='text-[16px] font-semibold mt-[50px]'>
                <Text>Informasi Pengiriman</Text>
            </div>
            <div className='mt-[16px] p-[16px] border-2'>
                <Row>
                    <Col span={6}>
                        <Text className='text-[16px] text-[#4F555B]'>Alamat</Text>
                    </Col>
                    <Col span={14}>
                        <Text className='text-[16px] '>Jalan Menuju hatinya yang jauh di sana, nggak kegapai-gapai pula.</Text>
                    </Col>
                    <Col span={4} className='text-right'>
                        <Text className='text-[16px] text-[#0E8244]'>Ubah</Text>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={6}>
                        <Text className='text-[16px] text-[#4F555B]'>Nomor Telepon</Text>
                    </Col>
                    <Col span={14}>
                        <Text className='text-[16px] '>085894984840</Text>
                    </Col>
                    <Col span={4} className='text-right'>
                        <Text className='text-[16px] text-[#0E8244]'>Ubah</Text>
                    </Col>
                </Row>
            </div>
            <div className='text-[16px] font-semibold mt-[50px]'>
                <Text>Metode Pengiriman</Text>
            </div>
            <div className='mt-[16px] p-[16px] border-2'>
                {/* SHOULD BE DYNAMIC */}
                <Row>
                    <Col span={14}>
                        <Checkbox />
                        <Text className='text-[16px] ml-[16px]'>JNE - Promo Free Shipping</Text>
                    </Col>
                    <Col span={10} className='text-right'>
                        <Text className='text-[16px] w-full text-[#4F555B] block font-medium'>Gratis</Text>
                    </Col>
                </Row>
                <Divider />
            </div>
            <Row className='mt-[250px]'>
                <Col span={12}>
                    <div className='w-11/12 bg-[#BD0029] font-semibold text-center h-[48px] flex place-items-center justify-center cursor-pointer hover:bg-[#c52f4f]'>
                        <Text className='text-[#ffff] text-[16px] '>Lanjutkan ke Pembayaran</Text>
                    </div>
                </Col>
                <Col span={12} className='flex place-items-center justify-start'>
                    <Text className='text-[16px] font-semibold'>Sebelumnya</Text>
                </Col>
            </Row>
        </div>
    )
}

export default Shipment;