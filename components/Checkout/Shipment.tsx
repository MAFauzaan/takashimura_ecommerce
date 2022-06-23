import React from 'react';
import { Divider, Checkbox } from 'antd';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { PrimaryRightButton } from '../Buttons/CheckoutButtons';

const Shipment = () => {

    const { push, back } = useRouter();

    const onNextPage = () => {
        push('/checkout/payment')
    };

    const onBack = () => {
        back();
    };

    return (
        <div className='h-full relative'>
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
            <div className='flex place-items-center absolute bottom-10 gap-8'>
                <PrimaryRightButton className='bg-[#BD0029] hover:bg-[#cb002c]' onClick={onNextPage}>Lanjutkan ke Pengiriman</PrimaryRightButton>
                <Typography className='text-[16px] font-semibold hover:cursor-pointer' onClick={onBack}>Sebelumnya</Typography>
            </div>
        </div>
    )
}

export default Shipment;