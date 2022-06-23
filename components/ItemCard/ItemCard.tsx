import React from 'react';
import { Card, Typography } from '@mui/material'
import Image from 'next/image';

type props = {
    item: any,
    onChangeSelectedItem: any
}

const ItemCard = ({ item, onChangeSelectedItem }: props) => {
    return (
        <Card className='w-[280px] border-none shadow-none rounded-none hover:cursor-pointer' onClick={() => onChangeSelectedItem(item)}>
            <Image src={item.photos[0].thumbUrl} height={300} width={280} alt="image" />
            <Typography className='text-[18px] font-semibold block mb-[8px]'>{item.productname}</Typography>
            <Typography className='text-[18px] text-[#4F555B]'>{`IDR ${item.sizevariants[0].price}`}</Typography>
        </Card>
    )
}

export default ItemCard;