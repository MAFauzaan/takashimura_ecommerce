import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Grid, Typography, Stepper, Step, StepLabel  } from "@mui/material";
import { useRouter } from "next/router";
import { useDynamicScreen } from "../../common/hooks/useDynamicScreen";
import style from '../Header/_Header.module.scss'

const CheckoutHeader = ({ step }: any) => {
    const { replace } = useRouter();
    const { windowWidth } = useDynamicScreen();

    const onBack = () => {
        replace('/')
    } 

    const stepLabel = ["Informasi", "Pengiriman", "Pembayaran"];

    return (
        <div className={`${windowWidth < 800 ? 'mb-[32px]' : ''}`}>
            <div className={style.logoTop}/ >
            <Grid container className="mt-[32px]">
                <Grid item xs={windowWidth <= 800 ? 12 : 4}>
                    <div className={`${windowWidth <= 800 ? 'mb-[40px]' : '4'} text-[16px] flex place-items-center hover:cursor-pointer`} onClick={onBack}>
                        <ArrowLeftOutlined />
                        <Typography className="ml-[10px] text-[14px]">Kembali ke keranjang</Typography>
                    </div>
                </Grid>
                <Grid item xs={windowWidth <= 800 ? 12 : 8}>
                    <Stepper activeStep={step}>
                       {
                           stepLabel.map((step: string) => (
                               <Step key={step}>
                                   <StepLabel className="text-[16px]">{step}</StepLabel>
                               </Step>
                           ))
                       }
                    </Stepper>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckoutHeader;