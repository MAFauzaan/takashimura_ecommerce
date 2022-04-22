import React from 'react';
import { Typography, TextField, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';

const Information = () => {
    const { push } = useRouter();

    const onNextPage = () => {
        push('/checkout/shipment')
    };

    return (
        <div>
            <div className='text-[16px] font-semibold mt-[50px]'>
                <Typography className='text-[16px] font-semibold'>Informasi Kontak</Typography>
            </div>
            <div className='mt-[32px] text-[16px]'>
                <label>Nama</label>
                <TextField
                    fullWidth
                    variant='outlined'
                    className='mt-10 mb-[32px]'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />               
                 <label>Alamat</label>
                 <TextField
                    fullWidth
                    variant='outlined'
                    className='mt-10 mb-[32px]'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />               
                <label>Keterangan Alamat (Opsional)</label>
                <TextField
                    fullWidth
                    variant='outlined'
                    className='mt-10 mb-[32px]'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />               
                <label>Kota</label>
                <TextField
                    fullWidth
                    variant='outlined'
                    className='mt-10 mb-[32px]'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />               
                <Grid container className='mb-[32px]'>
                    <Grid item xs={6}>
                        <label>Provinsi</label>
                        <TextField
                    fullWidth
                    variant='outlined'
                    className='mt-10 mb-[32px]'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />               
                    </Grid>
                    <Grid item xs={6}>
                        <label>Kode Pos</label>
                        <TextField
                    fullWidth
                    variant='outlined'
                    className='mt-10 mb-[32px]'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />               
                    </Grid>
                </Grid>
                <label>Nomor Telepon</label>
                <TextField
                    fullWidth
                    variant='outlined'
                    className='mt-10 mb-[32px]'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />               
            </div>
            <div
                className='w-7/12 bg-[#BD0029] font-semibold text-center h-[48px] flex place-items-center justify-center cursor-pointer hover:bg-[#c52f4f] mt-[40px]'
                onClick={onNextPage}
            >
                <Typography className='text-[#ffff] text-[16px] '>Lanjutkan ke Pengiriman</Typography>
            </div>
        </div>
    )
}

export default Information;