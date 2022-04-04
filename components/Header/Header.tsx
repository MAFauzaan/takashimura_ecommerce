import React, { useState } from 'react';
import { Row, Col, Typography, Drawer } from "antd"
import { useDynamicScreen } from "../../hooks/useDynamicScreen";
import { SearchOutlined, ShoppingOutlined, MenuOutlined } from '@ant-design/icons'
import style from './_Header.module.scss'

const { Text, Title } = Typography;

export const Header = () => {
    const { windowWidth } = useDynamicScreen();

    const [ openDrawer, setOpenDrawer ] = useState<boolean>(false);
    
    const onOpenDrawer = () => {
        setOpenDrawer(true)
    }

    const onCloseDrawer = () => {
        setOpenDrawer(false)
    }

    console.log(openDrawer)

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
                                <div className={style.logoTop} />
                            </Col>
                            <Col span={8} className="text-center flex justify-center items-center">
                                <div className="mr-[24px]">
                                    <Text className="text-[16px] mr-4">Keranjang</Text>
                                    <div className="bg-[#BD0029] h-[24px] w-[24px] rounded-full inline-block items-center justify-center">
                                        <p className="text-2xl text-white">0</p>
                                    </div>
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
                                    <div className={style.logoTop} />
                                </Col>
                                <Col span={8} className="text-center">
                                    <div className="mr-[24px]">
                                        <ShoppingOutlined className="text-4xl mr-[5px] " />
                                        <div className="bg-[#BD0029] h-[24px] w-[24px] rounded-full inline-block items-center justify-center text-center relative top-[3px]">
                                            <p className="text-2xl text-white mt-[1px]">0</p>
                                        </div>
                                        <Text className="text-[16px] mr-4 ml-4">Masuk</Text>
                                        <SearchOutlined className="text-4xl ml-" />
                                    </div>
                                </Col>
                            </>
                            :
                            windowWidth <600 ?
                            <>
                                <Col span={windowWidth < 768 ? 4 : 8}>
                                    <MenuOutlined className="text-4xl relative bottom-[1px] ml-[21px]" onClick={onOpenDrawer}/>
                                </Col>
                                <Col span={windowWidth < 768 ? 15 : 8} className="text-center flex place-items-center place-content-center">
                                 <div className={style.logoTop} />
                                </Col>
                                <Col span={windowWidth < 768 ? 5 : 8} className="text-right">
                                    <div className="mr-[12px]">
                                        <ShoppingOutlined className="text-4xl mr-[5px] " />
                                        <div className="bg-[#BD0029] h-[24px] w-[24px] rounded-full inline-block items-center justify-center text-center relative top-[3px]">
                                            <p className="text-2xl text-white mt-[1px]">0</p>
                                        </div>
                                    </div>
                                </Col>
                                <Drawer
                                    visible={openDrawer}
                                    onClose={onCloseDrawer}
                                    width={378}
                                    placement="left"
                                > 
                                    <Text className='block text-4xl mb-10'>Jelajahi</Text>
                                    <Text className='block text-4xl mb-10'>Produk</Text>
                                    <Text className='block text-4xl'>Masuk</Text>
                                </Drawer>
                            </>
                            :
                            null
                }
            </Row>
        </>
    )
}
