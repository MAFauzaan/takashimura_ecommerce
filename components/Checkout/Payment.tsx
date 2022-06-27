import React from 'react';
import { Divider } from 'antd';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { PrimaryRightButton } from '../Buttons/CheckoutButtons';
import { useAppSelector } from '../../store/hooks';
import { checkUserData } from '../../store/reducers/userSlice';

type props = {
    shipmentMethod: any
}

const Payment = ({shipmentMethod}: any) => {
    const userData = useAppSelector(checkUserData)
    const { push, back } = useRouter();
    console.log(shipmentMethod)
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
                        <Typography className='text-[16px] '>{''}</Typography>
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
                        <Typography className='text-[16px] '>{''}</Typography>
                    </Grid>
                    <Grid item xs={2} className='text-right'>
                        <Typography className='text-[16px] text-[#0E8244]'>Ubah</Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container>
                    <Grid item xs={3}>
                        <Typography className='text-[16px] text-[#4F555B]'>Metode Pengiriman</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography className='text-[16px] '>JNE - Promo Free Shipping</Typography>
                    </Grid>
                    <Grid item xs={2} className='text-right'>
                        <Typography className='text-[16px] text-[#0E8244]'>Ubah</Typography>
                    </Grid>
                </Grid>
            </div>
            <div className='text-[16px] font-semibold mt-[50px]'>
                <Typography>Pembayaran</Typography>
            </div>
            <div className='mt-[16px] p-[16px] border-2'>
                {/* SHOULD BE DYNAMIC */}

            </div>
            <div className='flex place-items-center absolute bottom-4 gap-8'>
                <PrimaryRightButton className='bg-[#BD0029] hover:bg-[#cb002c]' onClick={onNextPage}>Selesaikan Pembayaran</PrimaryRightButton>
                <Typography className='text-[16px] font-semibold hover:cursor-pointer' onClick={onBack}>Sebelumnya</Typography>
            </div>
        </div>
    )
}

export default Payment;