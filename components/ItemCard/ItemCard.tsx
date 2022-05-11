import React from 'react';
import { Card, Typography } from '@mui/material'
import Image from 'next/image';

const ItemCard = ({ item, onChangeSelectedItem }: any) => {
    return (
        <Card className='w-[280px] border-none' onClick={() => onChangeSelectedItem(item)}>
            <Image src='/dummyImage.png' height={300} width={280} alt="image"/>
            <Typography className='text-[18px] font-semibold block mb-[8px]'>{item.name}</Typography>
            <Typography className='text-[18px] text-[#4F555B]'>{`IDR ${item.sizes[0].price}`}</Typography>
        </Card>
    )
}

export default ItemCard;