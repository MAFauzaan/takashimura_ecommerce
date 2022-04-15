import React from 'react';
import { Card, Typography } from 'antd';
import Image from 'next/image';

const { Text } = Typography;

const ItemCard = ({ item }: any) => {
    console.log(item)
    return (
        <Card className='w-[280px] border-none'>
            <Image src='/dummyImage.png' height={300} width={280} alt="image"/>
            <Text className='text-[18px] font-semibold block mb-[8px]'>{item.name}</Text>
            <Text className='text-[18px] text-[#4F555B]'>{`IDR ${item.sizes[0].price}`}</Text>
        </Card>
    )
}

export default ItemCard;