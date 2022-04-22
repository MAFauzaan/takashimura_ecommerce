import React from 'react';
import CheckoutHeader from '../../../components/Checkout/CheckoutHeader';
import CartDetail from '../../../components/Checkout/CartDetail';
import { Grid } from '@mui/material';
import Information from '../../../components/Checkout/Information';
import { useDynamicScreen } from '../../../common/hooks/useDynamicScreen';

const CheckoutPageInformation = () => {
    const { windowWidth } = useDynamicScreen();

    return (
        <div className={windowWidth < 1100 ? 'py-[16px] px-[16px]' : 'py-[50px] px-[120px]'}>
            <CheckoutHeader step={0} />
            <Grid container>
                {
                    windowWidth < 800 ?

                        <>
                            <Grid item xs={windowWidth < 800 ? 12 : 6}>
                                <CartDetail />
                            </Grid>
                            <Grid item xs={windowWidth < 800 ? 12 : 6} className="py-[16px] px-[32px]">
                                <Information />
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item xs={windowWidth < 800 ? 12 : 6} className="py-[16px] px-[32px]">
                                <Information />
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

export default CheckoutPageInformation;