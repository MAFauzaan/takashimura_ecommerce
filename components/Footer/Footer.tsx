import { Row, Col, Typography, Divider } from "antd"
import Image from "next/image";
import { useDynamicScreen } from "../../hooks/useDynamicScreen";

const { Text } = Typography;

export const Footer = () => {
    const { windowWidth } = useDynamicScreen();
    return (
        <>
            {
                windowWidth >= 1100 ?
                    <Row justify="center">
                        <Col span={4} className="text-center">
                            <Image src='/brand-footer1.png' alt="brand-footer" height="40px" width="213px" />
                        </Col>
                        <Col span={16} className='text-center'>
                            <Text className="mr-24 text-[16px]">Mukena</Text>
                            <Text className="mr-24 text-[16px]">Daster</Text>
                            <Text className="mr-24 text-[16px]">Batik</Text>
                            <Text>Alat-alat sholat</Text>
                        </Col>
                        <Col span={4} />
                        <Divider className="" />
                        <Col>
                            <Text>Copyright 2022©, All right Reserved</Text>
                        </Col>
                    </Row>
                    :
                    windowWidth >= 769 && windowWidth < 1100 ?
                        <Row justify="center">
                            <Col span={4} className="text-left">
                                <Image src='/brand-footer2.png' alt="brand-footer" height="40px" width="40px" />
                            </Col>
                            <Col span={16} className='text-center'>
                                <Text className="mr-24 text-[16px]">Mukena</Text>
                                <Text className="mr-24 text-[16px]">Daster</Text>
                                <Text className="mr-24 text-[16px]">Batik</Text>
                                <Text>Alat-alat sholat</Text>
                            </Col>
                            <Col span={4} />
                            <Divider className="" />
                            <Col>
                                <Text>Copyright 2022©, All right Reserved</Text>
                            </Col>
                        </Row>
                        :
                        <Row justify="center">
                            <Col span={24} className="text-left">
                                <Image src='/brand-footer1.png' alt="brand-footer" height="40px" width="213px" />
                            </Col>
                            <Col span={24} className='text-left mt-6'>
                                <Text className="mb-4 block text-[16px]">Mukena</Text>
                                <Text className="mb-4 block text-[16px]">Daster</Text>
                                <Text className="mb-4 block text-[16px]">Batik</Text>
                                <Text className="block text-[16px]">Alat-alat sholat</Text>
                            </Col>
                            <Col span={4} />
                            <Divider className="" />
                            <Col>
                                <Text>Copyright 2022©, All right Reserved</Text>
                            </Col>
                        </Row>
            }

        </>
    )
}

