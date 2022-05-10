import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';

const UserSettings = () => {
    const userFormArray = ["Nama", "Email", "Alamat", "Negara", " Kode Pos", "Nomor Telepon"];

    return (
        <div className='bg-white p-[32px] mb-[16px]'>
            {
                userFormArray.map((user: any, index) => {
                    return (
                        <Grid container key={index} className='text-[16px] mb-[16px]'>
                            <Grid item xs={4}>
                                <Typography className='block text-[#4F555B] text-[16px]'>{user}</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    fullWidth
                                    autoComplete='off'
                                    sx={{
                                        "& label.Mui-focused": {
                                            display: "none"
                                        },
                                        "& legend": {
                                            display: "none"
                                        }
                                    }} />
                            </Grid>
                        </Grid>
                    )
                })
            }
        </div>
    )
}

export default UserSettings;