import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Row, Col, Steps } from "antd";
import { Grid, Typography, Stepper  } from "@mui/material";
import { useRouter } from "next/router";
import { useDynamicScreen } from "../../common/hooks/useDynamicScreen";
import style from '../Header/_Header.module.scss'

const { Step } = Steps; 

const CheckoutHeader = ({ step }: any) => {
    const { replace } = useRouter();
    const { windowWidth } = useDynamicScreen();

    const onBack = () => {
        replace('/')
    } 

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
                <Grid item xs={windowWidth <= 800 ? 12 : 4}>
                    <Steps current={step} size="small" className="w-[550px]">
                        <Step title="Informasi" />
                        <Step title="Pengiriman" />
                        <Step title="Pembayaran" />
                    </Steps>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckoutHeader;