import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface IItemMiniDescription {
    itemName: string,
    itemPrice: number
}

const ItemMiniDescription = ({ itemName, itemPrice}: IItemMiniDescription) => (
    <div className='flex'>
        <div className='w-[64px] h-[64px]  bg-red-700 inline-block' />
        <div className='w-[184px] ml-[16px]'>
            <Text className='text-[14px] inline-block w-full'>{itemName}</Text>
            <Text className='text-[14px] inline-block font-medium w-full'>{`Rp${itemPrice}`}</Text>
        </div>
    </div>
)

export default ItemMiniDescription;