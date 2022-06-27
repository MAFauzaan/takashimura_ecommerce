import React from 'react';
import { Typography, TextField, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';
import { PrimaryRightButton } from '../Buttons/CheckoutButtons';
import { useAppSelector } from '../../store/hooks';
import { checkUserData } from '../../store/reducers/userSlice';

const Information = () => {
    const { push } = useRouter();
    const userData = useAppSelector(checkUserData);
    console.log(userData)

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
                    className='mt-2 mb-8'
                    value={userData.username}
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
                    className='mt-2 mb-8'
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
                    value={userData?.address?.addressDetail || ''}
                    variant='outlined'
                    className='mt-2 mb-8'
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
                    value={userData?.address?.city || ''}
                    variant='outlined'
                    className='mt-2 mb-8'
                    sx={{
                        "& label.Mui-focused": {
                            display: "none"
                        },
                        "& legend": {
                            display: "none"
                        }
                    }}
                />
                <div className='flex'>
                    <div className='mr-2'>
                        <label>Provinsi</label>
                        <TextField
                            fullWidth
                            variant='outlined'
                            className='mt-2 mb-8 mr-2'
                            value={userData?.address?.province || ''}
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
                    <div className='ml-2'>
                        <label>Kode Pos</label>
                        <TextField
                            fullWidth
                            value={userData?.address?.postNumber || ''}
                            variant='outlined'
                            className='mt-2 mb-8'
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
                </div>
                <label>Nomor Telepon</label>
                <TextField
                    fullWidth
                    value={userData?.phoneNumber || ''}
                    variant='outlined'
                    className='mt-2 mb-8'
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
           <PrimaryRightButton className='bg-[#BD0029] hover:bg-[#cb002c] !w-[320px]' onClick={onNextPage}>Lanjutkan ke Pengiriman</PrimaryRightButton>
        </div>
    )
}

export default Information;