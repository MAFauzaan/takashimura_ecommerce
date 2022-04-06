import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Drawer, Input } from "antd"
import { useDynamicScreen } from "../../hooks/useDynamicScreen";
import { SearchOutlined, ShoppingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { onOpenDrawer as openCart, onCloseDrawer as closeCart } from '../../store/reducers/cartSlice';
import style from './_Header.module.scss'
import CustomDrawer from './CustomDrawer';
import { useHeader } from './useHeader';

const { Text } = Typography;

export const Header = () => {
    const dispatch = useDispatch();
    const { openDrawer, onOpenDrawer, onCloseDrawer } = useHeader();
    
    const { windowWidth } = useDynamicScreen();

    const TotalItemCart = () => (
        <div className="bg-[#BD0029] h-[24px] w-[24px] rounded-full inline-block items-center justify-center">
            <p className="text-2xl text-white">0</p>
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
            <Row justify={windowWidth > 768 ? 'center' : 'start'}>
                {
                    windowWidth > 768 ?
                        <>
                            <Col span={8} className="text-center">
                                <Text className="text-[16px] mr-16">Jelajahi</Text>
                                <Text className="text-[16px]">Produk</Text>
                            </Col>
                            <Col span={8} className="text-center flex place-items-center place-content-center">
                                <div className={`${style.logoTop} absolute top-[25px]`} />
                            </Col>
                            <Col span={8} className="text-center flex justify-center items-center">
                                <div className="mr-[24px]">
                                    <Text className="text-[16px] mr-4 hover:cursor-pointer" onClick={onOpenCart}>Keranjang</Text>
                                    <TotalItemCart />
                                </div>
                                <Text className="text-[16px] mr-4">Masuk</Text>
                                <SearchOutlined className="text-4xl" />
                            </Col>
                        </>
                        :
                        windowWidth > 600 && windowWidth < 769 ?
                            <>
                                <Col span={8} className="text-center">
                                    <Text className="text-[16px] mr-16">Jelajahi</Text>
                                    <Text className="text-[16px]">Produk</Text>
                                </Col>
                                <Col span={8} className="text-center flex place-items-center place-content-center">
                                    <div className={`${style.logoTop} absolute top-[25px]`} />
                                </Col>
                                <Col span={8} className="text-center">
                                    <div className="mr-[24px]">
                                        <ShoppingOutlined className="text-4xl mr-[5px] hover:cursor-pointer" onClick={onOpenCart} />
                                        <TotalItemCart />
                                        <Text className="text-[16px] mr-4 ml-4">Masuk</Text>
                                        <SearchOutlined className="text-4xl ml-" />
                                    </div>
                                </Col>
                            </>
                            :
                            windowWidth <= 600 ?
                                <>
                                    <Col span={windowWidth < 768 ? 4 : 8}>
                                        {
                                            openDrawer ?
                                                <CloseOutlined className="text-4xl relative bottom-[1px] ml-[21px]" onClick={onCloseDrawer} />
                                                :
                                                <MenuOutlined className="text-4xl relative bottom-[1px] ml-[21px]" onClick={onOpenDrawer} />
                                        }
                                    </Col>
                                    <Col span={windowWidth < 768 ? 15 : 8} className="text-center flex place-items-center place-content-center">
                                        <div className={`${style.logoTop} absolute top-[25px]`} />
                                    </Col>
                                    <Col span={windowWidth < 768 ? 5 : 8} className="text-center">
                                        <div className="mr-[24px]">
                                            <ShoppingOutlined className="text-4xl mr-[5px] hover:cursor-pointer" onClick={onOpenCart} />
                                            <TotalItemCart />
                                        </div>
                                    </Col>
                                </>
                                :
                                null
                }
            </Row>
            {
                openDrawer && windowWidth <= 769 &&
                <CustomDrawer onClick={onCloseDrawer}/>
            }
        </>
    )
}
