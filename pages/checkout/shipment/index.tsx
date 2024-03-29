import React from 'react';
import { Grid } from '@mui/material';
import CheckoutHeader from '../../../components/Checkout/CheckoutHeader';
import CartDetail from '../../../components/Checkout/CartDetail';
import Shipment from '../../../components/Checkout/Shipment';
import { useDynamicScreen } from '../../../common/hooks/useDynamicScreen';
import useCheckout from '../hooks/useCheckout';

const CheckoutPagePayment = () => {
    const { windowWidth } = useDynamicScreen();
    const { shipmentMethod, onChangeShipmentMethod } = useCheckout()
    return (
        <div className={windowWidth < 800 ? 'py-[16px] px-[16px]' : 'py-[50px] px-[120px]'}>
        <CheckoutHeader step={1} />
        <Grid container>
            {
                windowWidth < 800 ?

                    <>
                        <Grid item xs={windowWidth < 800 ? 12 : 6}>
                            <CartDetail />
                        </Grid>
                        <Grid item xs={windowWidth < 800 ? 12 : 6} className="py-[16px] px-[32px]">
                            <Shipment shipmentMethod={shipmentMethod} onChangeShipmentMethod={onChangeShipmentMethod}/>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={windowWidth < 800 ? 12 : 6} className="py-[16px] px-[32px]">
                            <Shipment shipmentMethod={shipmentMethod} onChangeShipmentMethod={onChangeShipmentMethod}/>
                        </Grid>
                        <Grid item xs={windowWidth < 800 ? 12 : 6}>
                            <CartDetail />
                        </Grid>
                    </>
            }
        </Grid>
    </div>
    )
}

export default CheckoutPagePayment