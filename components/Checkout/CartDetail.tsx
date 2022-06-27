import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMoreOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import ItemMiniDescription from '../ItemMiniDescription/ItemMiniDescription';
import { useAppSelector } from '../../store/hooks';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen'
import { checkCartItems } from '../../store/reducers/userSlice';

const CartDetail = () => {
    const { windowWidth } = useDynamicScreen();
    const cartItems = useAppSelector(checkCartItems);
    const subtotal = () => {
        const mappedCartItems = cartItems.map((v: any) => v.detail);
        const sub = mappedCartItems.reduce((a: any, b: any) => a + b.subtotal, 0);

        return sub || '';
    }

    return (
        <>
            {
                windowWidth < 800 ?
                    <Accordion className='bg-[#F8F9FA]' expanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            id='item-detail'
                        >
                            <div className='flex place-items-center'>
                                <ShoppingBagOutlined className='text-[16px]' sx={{color: '#BD0029'}}/>
                                <Typography className='text-[16px]'>Tampilkan ringkasan pesanan</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='bg-[#F8F9FA] min-h-[700px] w-full overflow-y-auto pb-[32px] px-[16px]'>
                                {
                                    cartItems.map((item: any) => {
                                        return (
                                            <Grid container key={item.id} className='mb-[16px]'>
                                                <Grid item xs={7}>
                                                    <ItemMiniDescription item={item} />
                                                </Grid>
                                                <Grid item xs={2} className='flex justify-center place-items-center'>
                                                    <div className='rounded-full bg-[#0E8244] w-[24px] h-[24px]  text-center'>
                                                        <Typography className='block text-[16px] text-white'>{item.detail.amount}</Typography>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={3} className='text-right'>
                                                    <div>
                                                        <Typography className='text-[16px] block font-semibold'>{`Rp ${item.detail.subtotal}`}</Typography>
                                                        <Typography className='text-[16px] block'>Hapus</Typography>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        )
                                    })
                                }
                                <div className='border-t-2 border-b-2 py-[16px]'>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography className='text-[16px] text-left'>Subtotal</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className='text-[16px] text-right'>{subtotal()}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography className='text-[16px] text-left'>Ongkos Pengiriman</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className='text-[16px] text-right'>Gratis</Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className='mt-[24px]'>
                                    <Grid container className='text-[16px] font-semibold'>
                                        <Grid item xs={6} className='text-left'>
                                            <Typography className='text-[16px]'>Total Biaya</Typography>
                                        </Grid>
                                        <Grid item xs={6} className='text-right'>
                                            <Typography className='text-[16px]'>{subtotal()}</Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    :
                    <div className='bg-[#F8F9FA] min-h-[700px] w-full overflow-y-auto py-[32px] px-[16px] mt-[45px]'>
                        {
                            cartItems.map((item: any) => {
                                return (
                                    <Grid container key={item.id} className='mb-[16px]'>
                                        <Grid item xs={7}>
                                            <ItemMiniDescription item={item} />
                                        </Grid>
                                        <Grid item xs={2} className='flex justify-center place-items-center'>
                                            <div className='text-center'>
                                                <Typography className='block text-[12px] text-[#343A40]'>QTY : {item.detail.amount}</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3} className='text-right'>
                                            <div>
                                                <Typography className='text-[16px] block font-semibold'>{`Rp ${item.detail.subtotal}`}</Typography>
                                                <Typography className='text-[16px] block'>Hapus</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                        <div className='border-t-2 border-b-2 py-[16px]'>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography className='text-[16px] text-left'>Subtotal</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className='text-[16px] text-right'>{subtotal()}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography className='text-[16px] text-left'>Ongkos Pengiriman</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className='text-[16px] text-right'>Gratis</Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <div className='mt-[24px]'>
                            <Grid container className='text-[16px] font-semibold'>
                                <Grid item xs={6} className='text-left'>
                                    <Typography className='text-[16px]'>Total Biaya</Typography>
                                </Grid>
                                <Grid item xs={6} className='text-right'>
                                    <Typography className='text-[16px]'>{subtotal()}</Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
            }
        </>

    )
}

export default CartDetail;