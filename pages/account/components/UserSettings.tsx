import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import { useAppSelector } from '../../../store/hooks';
import { checkUserData } from '../../../store/reducers/userSlice';

const UserSettings = () => {
    const userData = useAppSelector(checkUserData);

    return (
        <div className='bg-white p-[32px] mb-[16px]'>
            <Grid container>
                <Grid container item className='text-[16px] mb-[16px]'>
                    <Grid item xs={4}>
                        <Typography className='block text-[#4F555B] text-[16px]'>Nama</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            autoComplete='off'
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
                    </Grid>
                </Grid>
                <Grid container item className='text-[16px] mb-[16px]'>
                    <Grid item xs={4}>
                        <Typography className='block text-[#4F555B] text-[16px]'>Email</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            autoComplete='off'
                            value={userData.email}
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
                <Grid container item className='text-[16px] mb-[16px]'>
                    <Grid item xs={4}>
                        <Typography className='block text-[#4F555B] text-[16px]'>Alamat</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            autoComplete='off'
                            value={userData.address || ''}
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
                <Grid container item className='text-[16px] mb-[16px]'>
                    <Grid item xs={4}>
                        <Typography className='block text-[#4F555B] text-[16px]'>Negara</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            autoComplete='off'
                            value={userData.country}
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
                <Grid container item className='text-[16px] mb-[16px]'>
                    <Grid item xs={4}>
                        <Typography className='block text-[#4F555B] text-[16px]'>Kode Pos</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            autoComplete='off'
                            value={userData.kodePos}
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
                <Grid container item className='text-[16px] mb-[16px]'>
                    <Grid item xs={4}>
                        <Typography className='block text-[#4F555B] text-[16px]'>Nomor Telepon</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            autoComplete='off'
                            value={userData.telephoneNumber}
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
            </Grid>
        </div>
    )
}

export default UserSettings;