import React from 'react';
import { Input, Typography } from 'antd';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';

import style from './_Header.module.scss';

const { Text } = Typography;

interface ICustomDrawer {
    onClick: any
}

const CustomDrawer = ({onClick}: ICustomDrawer) => (
    <>
        <div className={style.customDrawer}>
            <Input size='large' placeholder='Cari batik, alat sholat' prefix={<SearchOutlined />} />
            <Text className='block text-4xl mt-10 mb-10'>Jelajahi</Text>
            <Text className='block text-4xl mb-10'>Produk</Text>
            <Text className='block text-4xl'>Masuk</Text>
        </div>
        <div className={style.drawerWrapper} onClick={onClick}>
        </div>
    </>
)

export default CustomDrawer;