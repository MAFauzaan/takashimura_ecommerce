import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { Drawer, Divider } from 'antd';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';
import { useAppSelector } from '../../store/hooks';
import { checkOpenDrawer, checkCartItems, onCloseDrawer } from '../../store/reducers/cartSlice';
import { CartList, ICartList } from '../../DUMMY/CartList';
import ItemMiniDescription from '../ItemMiniDescription/ItemMiniDescription';

const Cart = () => {
    const { windowWidth } = useDynamicScreen();
    const { replace } = useRouter();
    const dispatch = useDispatch();
    const cartItems = useAppSelector(checkCartItems);
    const isCartOpened: boolean = useAppSelector(checkOpenDrawer);

    const onClickCheckout = () => {
        dispatch(onCloseDrawer());
        replace('/checkout/information');
    }

    useEffect(() => {
        if (isCartOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isCartOpened]);


    return (
        <Drawer
            placement="right"
            width={windowWidth > 600 ? 556 : 380}
            onClose={() => dispatch(onCloseDrawer())}
            visible={isCartOpened}
            mask={false}
        >
            <div className='relative h-full w-full'>
                <div className='flex px-[16px] py-[20px] place-content-center font-semibold relative'>
                    <Typography className='text-[24px]'>Keranjang</Typography>
                    <div
                        className='w-[32px] h-[32px] rounded-full bg-[#F8F9FA] absolute right-16 top-[25px] text-center flex place-items-center justify-center hover:cursor-pointer'
                        onClick={() => dispatch(onCloseDrawer())}
                    >
                        <CloseOutlined className='text-[16px]' />
                    </div>
                </div>
                <Divider className='mt-0' />
                <div className='w-full h-[500px] overflow-scroll'>
                    {
                        cartItems.length > 0 &&
                        <>
                            {
                                cartItems.map((cartItem: ICartList) => (
                                    <React.Fragment key={cartItem.id}>
                                        {
                                            windowWidth > 769 ?
                                                <Grid container className='px-[16px] mb-[32px]'>
                                                    <Grid item xs={6} className='flex'>
                                                        <ItemMiniDescription itemName={cartItem.name} itemPrice={cartItem.price} />
                                                    </Grid>
                                                    <Grid item xs={3} className='flex place-items-center'>
                                                        <Grid container className='w-full h-[40px] text-center border-2 rounded-md'>
                                                            <Grid item xs={4} className='flex place-items-center justify-center'>
                                                                <MinusOutlined />
                                                            </Grid>
                                                            <Grid item xs={4} className='flex place-items-center justify-center'>
                                                                <Typography>{cartItem.amount}</Typography>
                                                            </Grid>
                                                            <Grid item xs={3} className='flex place-items-center justify-center'>
                                                                <PlusOutlined />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={3} className='text-right'>
                                                        <Typography className='text-[16px] font-semibold block mb-[16px]'>{`Rp${cartItem.price * cartItem.amount}`}</Typography>
                                                        <Typography className='text-[14px] block'>Hapus</Typography>
                                                    </Grid>
                                                </Grid>
                                                :
                                                <Grid container className='px-[16px] mb-[32px]'>
                                                    <Grid item xs={12} className='flex mb-12'>
                                                        <ItemMiniDescription itemName={cartItem.name} itemPrice={cartItem.price} />
                                                    </Grid>
                                                    <Grid item xs={6} className='flex place-items-center justify-end'>
                                                        <Grid container className='w-[120px] h-[40px] text-center border-2 rounded-md'>
                                                            <Grid item xs={4} className='flex place-items-center justify-center'>
                                                                <MinusOutlined />
                                                            </Grid>
                                                            <Grid item xs={4} className='flex place-items-center justify-center'>
                                                                <Typography>{cartItem.amount}</Typography>
                                                            </Grid>
                                                            <Grid item xs={4} className='flex place-items-center justify-center'>
                                                                <PlusOutlined />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={6} className='text-right'>
                                                        <Typography className='text-[16px] font-semibold block mb-[8px]'>{`Rp${cartItem.price * cartItem.amount}`}</Typography>
                                                        <Typography className='text-[14px] block'>Hapus</Typography>
                                                    </Grid>
                                                </Grid>
                                        }
                                    </React.Fragment>
                                ))
                            }
                            <div className={`${windowWidth > 600 ? 'w-[556px]' : 'w-[380px]'} fixed bottom-0 bg-[#F8F9FA] py-[24px] px-[16px]`}>
                                <Typography className='block text-[16px] font-medium mb-[24px]'>Rangkuman Pembelian</Typography>
                                <Grid container className='mb-[16px]'>
                                    <Grid item xs={6}>
                                        <Typography className='text-[14px] block'>Subtotal</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className='text-[14px] block text-right'>Rp 140.000</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography className='text-[14px] block'>Ongkos Pengiriman</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className='text-[14px] block text-right'>Gratis</Typography>
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid container className='font-semibold mb-[32px]'>
                                    <Grid item xs={6}>
                                        <Typography className='text-[14px] block'>Total Biaya</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className='text-[14px] block text-right'>Rp 140.000</Typography>
                                    </Grid>
                                </Grid>
                                <div
                                    className='w-full bg-[#BD0029] font-semibold text-center h-[48px] flex place-items-center justify-center cursor-pointer hover:bg-[#c52f4f]'
                                    onClick={onClickCheckout}
                                >
                                    <Typography className='text-[#ffff] text-[16px] '>Masuk ke Pembayaran</Typography>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </Drawer>
    )
}

export default Cart;