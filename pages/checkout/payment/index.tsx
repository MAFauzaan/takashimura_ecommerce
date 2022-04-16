import React from 'react';
import { Row, Col } from 'antd';
import CheckoutHeader from '../../../components/Checkout/CheckoutHeader';
import Payment from '../../../components/Checkout/Payment'
import CartDetail from '../../../components/Checkout/CartDetail';

const CheckoutPageInformation = () => {
    return (
        <div className='py-[50px] px-[120px]'>
            <CheckoutHeader step={2} />
            <Row>
                <Col span={12} className="py-[16px] px-[32px]">
                    <Payment />
                </Col>
                <Col span={12}>
                    <CartDetail />
                </Col>
            </Row>
        </div>
    )
}

export default CheckoutPageInformation;