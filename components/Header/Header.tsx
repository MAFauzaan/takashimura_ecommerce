import { Row, Col, Typography } from "antd"
import { useDynamicScreen } from "../../hooks/useDynamicScreen";
import { SearchOutlined, ShoppingOutlined, MenuOutlined } from '@ant-design/icons'
import Image from "next/image";

const { Text, Title } = Typography;

export const Header = () => {
    const { windowWidth } = useDynamicScreen();

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
                            <Col span={8} className="text-center">
                                <Text className="text-[24px]">Takashiimura</Text>
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
                                <Col span={8} className="text-center">
                                    <Text className="text-[24px]">Takashiimura</Text>
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
                            <>
                                <Col span={8}>
                                    <MenuOutlined className="text-4xl relative bottom-[1px] ml-[21px]" />
                                </Col>
                                <Col span={8} className="text-center">
                                    <Text className="text-[24px]">Takashiimura</Text>
                                </Col>
                                <Col span={8} className="text-right">
                                    <div className="mr-[12px]">
                                        <ShoppingOutlined className="text-4xl mr-[5px] " />
                                        <div className="bg-[#BD0029] h-[24px] w-[24px] rounded-full inline-block items-center justify-center text-center relative top-[3px]">
                                            <p className="text-2xl text-white mt-[1px]">0</p>
                                        </div>
                                    </div>
                                </Col>
                            </>
                }
            </Row>
        </>
    )
}
