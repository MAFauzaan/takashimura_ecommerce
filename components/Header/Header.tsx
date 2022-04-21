import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material'
import { useDynamicScreen } from "../../common/hooks/useDynamicScreen";
import { SearchOutlined, ShoppingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { onOpenDrawer as openCart, onCloseDrawer as closeCart } from '../../store/reducers/cartSlice';
import style from './_Header.module.scss'
import CustomDrawer from './CustomDrawer';
import { useHeader } from './useHeader';
import { useRouter } from 'next/router';

export const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { replace } = router;
    const { openDrawer, onOpenDrawer, onCloseDrawer } = useHeader();

    const { windowWidth } = useDynamicScreen();

    const TotalItemCart = () => (
        <div className="bg-[#BD0029] h-[24px] w-[24px] rounded-full inline-block items-center justify-center">
            <p className="text-2xl text-white !text-center">0</p>
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
                    windowWidth > 768 ?
                        <>
                            <Grid item sm={4} className="flex place-items-center justify-center h-[64px]">
                                <Typography className="text-[16px] mr-16">Jelajahi</Typography>
                                <Typography className="text-[16px]">Produk</Typography>
                            </Grid>
                            <Grid item sm={4} className="text-center flex place-items-center place-content-center h-[64px]">
                                <div className={`${style.logoTop} absolute top-[25px] hover: cursor-pointer`} onClick={() => replace('/')} />
                            </Grid>
                            <Grid item sm={4} className="text-center flex justify-center items-center h-[64px]">
                                <div className="mr-[24px] flex">
                                    <Typography className="text-[16px] mr-4 hover:cursor-pointer" onClick={onOpenCart}>Keranjang</Typography>
                                    <TotalItemCart />
                                </div>
                                <Typography className="text-[16px] mr-4">Masuk</Typography>
                                <SearchOutlined className="text-4xl" />
                            </Grid>
                        </>
                        :
                        windowWidth > 600 && windowWidth < 769 ?
                            <>
                                <Grid item sm={4} className="flex place-items-center justify-center h-[64px]">
                                    <Typography className="text-[16px] mr-16">Jelajahi</Typography>
                                    <Typography className="text-[16px]">Produk</Typography>
                                </Grid>
                                <Grid item sm={4} className="text-center flex place-items-center place-content-center h-[64px]">
                                    <div className={`${style.logoTop} absolute top-[25px] hover: cursor-pointer`} onClick={() => replace('/')} />
                                </Grid>
                                <Grid item sm={4} className="text-center h-[64px] flex" justifyContent='end' justifyItems='center'>
                                    <div className="mr-[24px] flex place-items-center">
                                        <ShoppingOutlined className="text-4xl mr-[5px] hover:cursor-pointer" onClick={onOpenCart} />
                                        <TotalItemCart />
                                        <Typography className="text-[16px] mr-4 ml-4">Masuk</Typography>
                                        <SearchOutlined className="text-4xl ml-" />
                                    </div>
                                </Grid>
                            </>
                            :
                            windowWidth <= 600 ?
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
                                        <div className="mr-[24px]">
                                            <ShoppingOutlined className="text-4xl mr-[5px] hover:cursor-pointer" onClick={onOpenCart} />
                                            <TotalItemCart />
                                        </div>
                                    </Grid>
                                </>
                                :
                                null
                }
            </Grid>
            {
                openDrawer && windowWidth <= 769 &&
                <CustomDrawer onClick={onCloseDrawer} />
            }
        </>
    )
}
