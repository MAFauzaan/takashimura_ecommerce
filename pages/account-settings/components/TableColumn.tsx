import React from 'react';
import { Grid, Typography } from '@mui/material'
import ItemMiniDescription from "../../../components/ItemMiniDescription/ItemMiniDescription";

export const tableColumns = [
    {
        title: 'Barang',
        dataIndex: 'name',
        key: 'name',
        render: (text: any, record: any) => (
            <ItemMiniDescription itemName={record.name} itemPrice={record.price} />
        )
    },
    {
        title: 'Jumlah',
        dataIndex: 'amount'
    },
    {
        title: 'Subtotal',
        render: (text: any, record: any) => {
            const subtotal = record.amount * record.price;

            return (
                <Typography className='text-[14px]'>{subtotal}</Typography>
            )
        }
    }
];

export const phoneTableColumn = [ 
    {
        title: 'orderedItem',
        render: (text: any, record: any) => {
            return (
                <Grid container className='px-[16px] mb-[32px]'>
                <Grid item xs={12} className='flex mb-12'>
                    <div className='w-[64px] h-[64px]  bg-red-700 inline-block' />
                    <div className='w-[184px] ml-[16px]'>
                        <Typography className='text-[14px] inline-block w-full'>{record.name}</Typography>
                        <Typography className='text-[14px] inline-block font-medium'>{`Rp${record.price}`}</Typography>
                    </div>
                </Grid>
                <Grid xs={5} />
                <Grid xs={3} className='block place-items-center text-center'>
                   <Typography className="block w-full text-[14px] text-[#4F555B]">Amount</Typography>
                   <Typography className="block text-[14px]">{record.amount}</Typography>
                </Grid>
                <Grid xs={1} />
                <Grid xs={3} className='text-right'>
                    <Typography className="text-[16px] text-[#4F555B]">Subtotal</Typography>
                    <Typography className='text-[16px] font-semibold block mb-[8px]'>{`Rp${record.price * record.amount}`}</Typography>
                </Grid>
            </Grid>
            )
        }
    }
]