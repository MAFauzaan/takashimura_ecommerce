import React from 'react';
import { Typography, Input, Row, Col } from 'antd';

const { Text } = Typography;

const Information = () => {
    return (
        <div>
            <div className='text-[16px] font-semibold mt-[50px]'>
                <Text>Informasi Kontak</Text>
            </div>
            <div className='mt-[32px] text-[16px]'>
                <label>Nama</label>
                <Input size='large' className='mb-[32px]' />
                <label>Alamat</label>
                <Input size='large' className='mb-[32px]' />
                <label>Keterangan Alamat (Opsional)</label>
                <Input size='large' className='mb-[32px]' />
                <label>Kota</label>
                <Input size='large' className='mb-[32px]' />
                <Row className='mb-[32px]'>
                    <Col span={12}>
                        <label>Provinsi</label>
                        <Input size='large' className='w-11/12' />
                    </Col>
                    <Col span={12}>
                        <label>Kode Pos</label>
                        <Input size='large' />
                    </Col>
                </Row>
                <label>Nomor Telepon</label>
                <Input size='large' />
            </div>
            <div className='w-7/12 bg-[#BD0029] font-semibold text-center h-[48px] flex place-items-center justify-center cursor-pointer hover:bg-[#c52f4f] mt-[40px]'>
                <Text className='text-[#ffff] text-[16px] '>Lanjutkan ke Pengiriman</Text>
            </div>
        </div>
    )
}

export default Information;