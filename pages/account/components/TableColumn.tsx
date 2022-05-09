import React from 'react';
import { Grid, Typography } from '@mui/material'
import { clone } from 'ramda'
import { StatusButton, ReviewButton } from './CustomButtons';
import ItemMiniDescription from "../../../components/ItemMiniDescription/ItemMiniDescription";

export const tableColumns = (onChangeSelectedStatusButton: any) => {
    return {
        item: {
            title: 'Barang',
            dataIndex: 'name',
            key: 'name',
            render: (text: any, record: any) => {
                const cloneRecord = clone(record);
                cloneRecord.items.pop();
                return (
                    <>
                        <div className='flex'>
                            <div className='w-[64px] h-[64px]  bg-red-700 inline-block' />
                            <div className='w-[184px] ml-[16px]'>
                                <Typography className='text-[14px] inline-block w-full'>{record.items[0].name}</Typography>
                                <Typography className='text-[14px] inline-block font-medium w-full mb-[8px]'>{`Rp${record.items[0].price}`}</Typography>
                                {
                                    record.items.length > 1 &&
                                    <Typography className='text-[12px] text-[#4F555B]'>+{cloneRecord.items.length} Produk lainnya</Typography>
                                }
                            </div>
                        </div>
                    </>
                )
            }
        },
        amount: {
            title: 'Jumlah',
            dataIndex: 'amount',
            render: (text: any, record: any) => {
                return (
                    <Typography className='text-[14px]'>{record.items[0].amounth}</Typography>
                )
            }
        },
        subtotal: {
            title: 'Subtotal',
            render: (text: any, record: any) => {
                const subtotal = record.items[0].amount * record.items[0].price;

                return (
                    <Typography className='text-[14px]'>{subtotal}</Typography>
                )
            }
        },
        status: {
            // Status
            title: '',
            render: (text: any, record: any) => (
                <>
                    {
                        record.status === 'shipment' ?
                            <StatusButton sx={{ textTransform: 'none' }} style={{ background: '#BD0029' }} onClick={() => onChangeSelectedStatusButton('shipment', record)}>Lihat Status</StatusButton>
                            :
                            <ReviewButton sx={{ textTransform: 'none' }} onClick={() => onChangeSelectedStatusButton('review', record)}>Beri Ulasan</ReviewButton>
                    }
                </>
            )
        }
    }
}

export const phoneTableColumn = (onChangeSelectedStatusButton: any) => {
    return {
        orderedItem: {
            render: (text: any, record: any) => {
                return (
                    <Grid container className='px-[16px] mb-[32px]'>
                        <Grid container item xs={3}>
                            <div className='w-[64px] h-[64px]  bg-red-700 inline-block' />
                        </Grid>
                        <Grid container item xs={9}>
                            <Grid item xs={12} className='flex mb-12'>
                                <div className='w-[184px] ml-[16px]'>
                                    <Typography className='text-[14px] inline-block w-full'>{record.name}</Typography>
                                    <Typography className='text-[14px] inline-block font-medium'>{`Rp${record.price}`}</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6} className='block place-items-center text-center'>
                                <Typography className="block w-full text-[14px] text-[#4F555B]">Amount</Typography>
                                <Typography className="block text-[14px]">{record.amount}</Typography>
                            </Grid>
                            <Grid item xs={6} className='text-right'>
                                <Typography className="text-[16px] text-[#4F555B]">Subtotal</Typography>
                                <Typography className='text-[16px] font-semibold block mb-[8px]'>{`Rp${record.price * record.amount}`}</Typography>
                            </Grid>
                            <Grid item xs={12} className='text-right mt-[32px]'>
                                {
                                    record.status === 'shipment' ?
                                        <StatusButton sx={{ textTransform: 'none' }} style={{ background: '#BD0029' }} onClick={() => onChangeSelectedStatusButton('shipment', record)}>Lihat Status</StatusButton>
                                        :
                                        <ReviewButton sx={{ textTransform: 'none' }} onClick={() => onChangeSelectedStatusButton('review', record)}>Beri Ulasan</ReviewButton>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                )
            }
        }
    }
} 