import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

interface IItemMiniDescription {
    item: any
}

const ItemMiniDescription = ({ item}: IItemMiniDescription) => {
    return (
        <div className='flex'>
            <Image src={'' || item?.photos[0]?.thumbUrl} height={64} width={64} alt={item.name} />
            <div className='w-[184px] ml-[16px]'>
                <Typography className='text-[14px] inline-block w-full'>{item.name}</Typography>
                <Typography className='text-[14px] inline-block w-full'>{item.detail.size}</Typography>
                <Typography className='text-[14px] inline-block font-medium w-full'>{`Rp${item.detail.pricePerItem}`}</Typography>
            </div>
        </div>
    )
    
}
export default ItemMiniDescription;