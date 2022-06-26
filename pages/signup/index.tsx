import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { StatusButton } from '../../components/CustomButtons';
import Link from 'next/link';
import { useSignUp } from './hooks/useSignup';
import { Alert } from 'antd';

const LoginPage = () => {
    const { email, password, fullName, onChangeEmail, onChangeFullName, onChangePassword, onClickRegister, message } = useSignUp()

    return (
        <div className='flex place-items-center justify-center h-[calc(100vh-64px)] relative'>
            <div>
                <div className='mb-[40px]'>
                    <Typography className='text-[28px] text-[#001219] font-semibold mb-[8px]'>Daftar</Typography>
                    <Typography className='text-[16px] text-[#343A40]'>Silakan isi form di bawah untuk mulai mendaftar.</Typography>
                </div>
                <div>
                    <Typography className='text-[14px] text-[#001219]'>Nama Lengkap</Typography>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        variant='outlined'
                        className='mt-5 mb-[24px]'
                        value={fullName}
                        onChange={onChangeFullName}
                        sx={{
                            "& label.Mui-focused": {
                                display: "none"
                            },
                            "& legend": {
                                display: "none"
                            },
                        }}
                    />
                    <Typography className='text-[14px] text-[#001219]'>Email</Typography>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        variant='outlined'
                        className='mt-5 mb-[24px]'
                        value={email}
                        onChange={onChangeEmail}
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
                        autoComplete='off'
                        fullWidth
                        variant='outlined'
                        className='mt-5 mb-[16px]'
                        value={password}
                        onChange={onChangePassword}
                        sx={{
                            "& label.Mui-focused": {
                                display: "none"
                            },
                            "& legend": {
                                display: "none"
                            },
                        }}
                    />
                    <StatusButton
                        fullWidth
                        sx={{ textTransform: 'none' }}
                        style={{ background: '#BD0029', width: '100%', marginTop: '16px' }}
                        onClick={onClickRegister}
                    >
                        Daftar
                    </StatusButton>
                </div>
                <div className='mt-[32px] text-center'>
                    <Typography className='text-[14px] font-medium'>
                        Sudah punya akun ?
                        <Link href='/login' passHref>
                            <span className='text-[#BD0029] font-semibold underline hover:cursor-pointer'> Masuk</span>
                        </Link>
                    </Typography>
                </div>
            </div>
            {
                message &&
                <Alert
                    message={message}
                    type="success"
                    showIcon
                    className='alert'
                />
            }
        </div>
    )
}

export default LoginPage;