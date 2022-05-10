import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { StatusButton } from '../../components/CustomButtons';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className='flex place-items-center justify-center h-[calc(100vh-64px)]'>
            <div>
                <div className='mb-[40px]'>
                    <Typography className='text-[28px] text-[#001219] font-semibold mb-[8px]'>Masuk</Typography>
                    <Typography className='text-[16px] text-[#343A40]'>Silakan masukkan email dan password anda.</Typography>
                </div>
                <div>
                    <Typography className='text-[14px] text-[#001219]'>Email</Typography>
                    <TextField
                        fullWidth
                        variant='outlined'
                        className='mt-5 mb-[24px]'
                        sx={{
                            "& label.Mui-focused": {
                                display: "none"
                            },
                            "& legend": {
                                display: "none"
                            },
                        }}
                    />
                    <Typography className='text-[14px] text-[#001219]'>Password</Typography>
                    <TextField
                        fullWidth
                        variant='outlined'
                        className='mt-5 mb-[16px]'
                        sx={{
                            "& label.Mui-focused": {
                                display: "none"
                            },
                            "& legend": {
                                display: "none"
                            },
                        }}
                    />
                    <Link href='#' passHref>
                        <Typography className='text-[14px] text-[#001219] hover:cursor-pointer hover:text-[#BD0029]'>Lupa Password ?</Typography>
                    </Link>
                    <StatusButton
                        fullWidth
                        sx={{ textTransform: 'none' }}
                        style={{ background: '#BD0029', width: '100%', marginTop: '16px' }}
                    >
                        Masuk
                    </StatusButton>
                </div>
                <div className='mt-[32px] text-center'>
                    <Link href='/signup' passHref>
                        <Typography className='text-[14px] font-medium'>
                            Tidak punya akun ? <span className='text-[#BD0029] font-semibold underline hover:cursor-pointer'>Daftar</span>
                        </Typography>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;