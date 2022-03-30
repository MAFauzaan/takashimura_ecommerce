import { Row, Col, Typography, Divider } from "antd"

const { Text } = Typography;

export const Footer = () => {
    return (
        <>
            <Row justify="center">
                <Col span={4} className="text-center">
                    <Text>Takashiimura</Text>
                </Col>
                <Col span={16} className='text-center'>
                    <Text className="mr-24">Mukena</Text>
                    <Text className="mr-24">Daster</Text>
                    <Text className="mr-24">Batik</Text>
                    <Text>Alat-alat sholat</Text>
                </Col>
                <Col span={4}/>
                    <Divider className=""/>
                <Col>
                    <Text>Copyright 2022©, All right Reserved</Text>
                </Col>
            </Row>
        </>
    )
}

