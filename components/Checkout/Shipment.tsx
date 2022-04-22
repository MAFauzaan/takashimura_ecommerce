import React from 'react';
import { Divider, Checkbox } from 'antd';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Shipment = () => {

    const { push, back } = useRouter();

    const onNextPage = () => {
        push('/checkout/payment')
    };

    const onBack = () => {
        back();
    };

    return (
        <div>
            <div className='text-[16px] font-semibold mt-[50px]'>
                <Typography className='text-[16px] font-semibold'>Informasi Pengiriman</Typography>
            </div>
            <div className='mt-[16px] p-[16px] border-2'>
                <Grid container>
                    <Grid item xs={3}>
                        <Typography className='text-[16px] text-[#4F555B]'>Alamat</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography className='text-[16px] '>Jalan Menuju hatinya yang jauh di sana, nggak kegapai-gapai pula.</Typography>
                    </Grid>
                    <Grid item xs={2} className='text-right'>
                        <Typography className='text-[16px] text-[#0E8244]'>Ubah</Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container>
                    <Grid item xs={3}>
                        <Typography className='text-[16px] text-[#4F555B]'>Nomor Telepon</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography className='text-[16px] '>085894984840</Typography>
                    </Grid>
                    <Grid item xs={2} className='text-right'>
                        <Typography className='text-[16px] text-[#0E8244]'>Ubah</Typography>
                    </Grid>
                </Grid>
            </div>
            <div className='text-[16px] font-semibold mt-[50px]'>
                <Typography>Metode Pengiriman</Typography>
            </div>
            <div className='mt-[16px] p-[16px] border-2'>
                {/* SHOULD BE DYNAMIC */}
                <Grid container>
                    <Grid item xs={8} className='flex place-items-center'>
                        <Checkbox />
                        <Typography className='text-[16px] ml-[16px]'>JNE - Promo Free Shipping</Typography>
                    </Grid>
                    <Grid item xs={4} className='text-right'>
                        <Typography className='text-[16px] w-full text-[#4F555B] block font-medium'>Gratis</Typography>
                    </Grid>
                </Grid>
                <Divider />
            </div>
            <Grid container className='mt-[250px]'>
                <Grid item xs={6}>
                    <div 
                        className='w-11/12 bg-[#BD0029] font-semibold text-center h-[48px] flex place-items-center justify-center cursor-pointer hover:bg-[#c52f4f]'
                        onClick={onNextPage}   
                    >
                        <Typography className='text-[#ffff] text-[16px] '>Lanjutkan ke Pembayaran</Typography>
                    </div>
                </Grid>
                <Grid item xs={6} className='flex place-items-center justify-start'>
                    <Typography className='text-[16px] font-semibold hover:cursor-pointer' onClick={onBack}>Sebelumnya</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Shipment;