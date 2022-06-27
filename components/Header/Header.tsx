import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material'
import { useDynamicScreen } from "../../common/hooks/useDynamicScreen";
import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { AccountCircleOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { onOpenDrawer as openCart, onCloseDrawer as closeCart } from '../../store/reducers/cartSlice';
import { checkCartItems } from '../../store/reducers/userSlice';
import Link from 'next/link';
import CustomDrawer from './CustomDrawer';
import { useHeader } from './useHeader';
import { useAppSelector } from '../../store/hooks';
import style from './_Header.module.scss'
import { checkIsAuthenticated } from '../../store/reducers/userSlice';

export const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { replace } = router;
    const { openDrawer, onOpenDrawer, onCloseDrawer } = useHeader();
    const isAuthenticated = useAppSelector(checkIsAuthenticated);
    const cartItemsAmount = useAppSelector(checkCartItems);

    const { windowWidth } = useDynamicScreen();

    const TotalItemCart = () => (
        <div className='w-6 h-6 flex place-items-center justify-center bg-[#BD0029] text-white rounded-full'>
            <p className='text-[16px]'>{cartItemsAmount.length || 0}</p>
        </div>
    )

    const onOpenCart = () => {
        if (openDrawer) {
            onCloseDrawer();
        }
        dispatch(() => dispatch(openCart()))
    }

    return (
        <>
            <Grid container className='h-[64px]'>
                {
                    windowWidth > 600 ?
                        <>
                            <Grid item sm={4} className="flex place-items-center justify-center h-[64px] gap-10">
                                <Link href="/" passHref>
                                    <Typography className="text-[16px] cursor-pointer">Jelajahi</Typography>
                                </Link>
                                <Link href="/products" passHref>
                                    <Typography className="text-[16px] cursor-pointer">Produk</Typography>
                                </Link>
                            </Grid>
                            <Grid item sm={4} className="text-center flex place-items-center place-content-center h-[64px]">
                                <div className={`${style.logoTop} absolute top-[25px] hover: cursor-pointer`} onClick={() => replace('/')} />
                            </Grid>
                            <Grid item sm={4} className="text-center flex justify-center items-center gap-5 h-[64px]">
                                {
                                    isAuthenticated &&
                                    <div className="flex place-items-center">
                                        <Typography className="text-[16px] mr-2 hover:cursor-pointer" onClick={onOpenCart}>Keranjang</Typography>
                                        <TotalItemCart />
                                    </div>
                                }
                                {
                                    isAuthenticated ?
                                        <Link href="/account" passHref>
                                            <AccountCircleOutlined className='!text-[25px] cursor-pointer' />
                                        </Link>
                                        :
                                        <Link href="/login" passHref>
                                            <Typography className="text-[16px] mr-4 cursor-pointer">Masuk</Typography>
                                        </Link>
                                }
                                <SearchOutlined className="text-2xl" />
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={4}>
                                {
                                    openDrawer ?
                                        <CloseOutlined className="text-4xl relative bottom-[1px] ml-[21px]" onClick={onCloseDrawer} />
                                        :
                                        <MenuOutlined className="text-4xl relative bottom-[1px] ml-[21px]" onClick={onOpenDrawer} />
                                }
                            </Grid>
                            <Grid item xs={4} className="text-center flex place-items-center place-content-center">
                                <div className={`${style.logoTop} absolute top-[25px]`} onClick={() => replace('/')} />
                            </Grid>
                            <Grid item xs={4} className="text-right">
                                <div className="flex place-items-center justify-center h-16">
                                    <ShoppingBagOutlined className="text-4xl mr-[5px] hover:cursor-pointer" onClick={onOpenCart} />
                                    <TotalItemCart />
                                </div>
                            </Grid>
                        </>
                }
            </Grid>
            {
                openDrawer && windowWidth <= 769 &&
                <CustomDrawer onClick={onCloseDrawer} />
            }
        </>
    )
}
