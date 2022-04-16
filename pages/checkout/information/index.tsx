import React from 'react';
import CheckoutHeader from '../../../components/Checkout/CheckoutHeader';
import CartDetail from '../../../components/Checkout/CartDetail';
import { Col, Row } from 'antd';
import Information from '../../../components/Checkout/Information';

const CheckoutPageInformation = () => {
    return (
        <div className='py-[50px] px-[120px]'>
            <CheckoutHeader step={0} />
            <Row>
                <Col span={12} className="py-[16px] px-[32px]">
                    <Information />
                </Col>
                <Col span={12}>
                    <CartDetail />
                </Col>
            </Row>
        </div>
    )
}

export default CheckoutPageInformation;