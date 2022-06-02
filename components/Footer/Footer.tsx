import { Divider } from "antd";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useDynamicScreen } from "../../common/hooks/useDynamicScreen";

export const Footer = () => {
    const { windowWidth } = useDynamicScreen();
    return (
        <>
            {
                windowWidth >= 1100 ?
                    <Grid container className="justify-items-center">
                        <Grid item xs={2} className="text-center">
                            <Image src='/brand-footer1.png' alt="brand-footer" height="40px" width="213px" />
                        </Grid>
                        <Grid item xs={8} className='text-center flex justify-center'>
                            <Typography className="mr-24 text-[16px]">Mukena</Typography>
                            <Typography className="mr-24 text-[16px]">Daster</Typography>
                            <Typography className="mr-24 text-[16px]">Batik</Typography>
                            <Typography className="mr-24 text-[16px]">Alat-alat sholat</Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Divider className="" />
                        <Grid item xs={12} >
                            <Typography className="text-[16px] text-center">Copyright 2022©, All right Reserved</Typography>
                        </Grid>
                    </Grid>
                    :
                    windowWidth >= 769 && windowWidth < 1100 ?
                        <Grid container className="justify-center">
                            <Grid item xs={2} className="text-left">
                                <Image src='/brand-footer2.png' alt="brand-footer" height="40px" width="40px" />
                            </Grid>
                            <Grid item xs={8} className='text-center flex justify-center'>
                                <Typography className="mr-24 text-[16px]">Mukena</Typography>
                                <Typography className="mr-24 text-[16px]">Daster</Typography>
                                <Typography className="mr-24 text-[16px]">Batik</Typography>
                                <Typography className="text-[16px]">Alat-alat sholat</Typography>
                            </Grid>
                            <Grid item xs={2} />
                            <Divider className="" />
                            <Grid item xs={12}>
                                <Typography className="text-[16px] text-center">Copyright 2022©, All right Reserved</Typography>
                            </Grid>
                        </Grid>
                        :
                        <Grid container className="justify-center">
                            <Grid item xs={12} className="text-left">
                                <Image src='/brand-footer1.png' alt="brand-footer" height="40px" width="213px" />
                            </Grid>
                            <Grid item xs={12} className='text-left mt-6'>
                                <Typography className="mb-4 block text-[16px]">Mukena</Typography>
                                <Typography className="mb-4 block text-[16px]">Daster</Typography>
                                <Typography className="mb-4 block text-[16px]">Batik</Typography>
                                <Typography className="block text-[16px]">Alat-alat sholat</Typography>
                            </Grid>
                            <Grid item xs={2} />
                            <Divider className="" />
                            <Grid item>
                                <Typography className="text-[16px] text-center">Copyright 2022©, All right Reserved</Typography>
                            </Grid>
                        </Grid>
            }

        </>
    )
}

