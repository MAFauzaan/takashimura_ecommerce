import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Row, Col, Steps, Typography } from "antd";
import { useDynamicScreen } from "../../common/hooks/useDynamicScreen";
import style from '../Header/_Header.module.scss'

const { Text } = Typography;
const { Step } = Steps; 

const CheckoutHeader = ({ step }: any) => {
    const { windowWidth } = useDynamicScreen();
    return (
        <div>
            <div className={style.logoTop}/ >
            <Row className="mt-[32px]">
                <Col span={windowWidth <= 600 ? 24 : 8}>
                    <div className="text-[16px] flex place-items-center">
                        <ArrowLeftOutlined />
                        <Text className="ml-[10px]">Kembali ke keranjang</Text>
                    </div>
                </Col>
                <Col span={windowWidth <= 600 ? 24 : 16}>
                    <Steps current={step} size="small" className="w-[550px]">
                        <Step title="Informasi" />
                        <Step title="Pengiriman" />
                        <Step title="Pembayaran" />
                    </Steps>
                </Col>
            </Row>
        </div>
    )
}

export default CheckoutHeader;