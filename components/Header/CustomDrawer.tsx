import React from 'react';
import { TextField, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import style from './_Header.module.scss';

interface ICustomDrawer {
    onClick: any
}

const CustomDrawer = ({onClick}: ICustomDrawer) => (
    <>
        <div className={style.customDrawer}>
            <TextField 
                fullWidth 
                placeholder='Cari batik, alat sholat' 
                InputProps={{ startAdornment: <SearchOutlinedIcon fontSize='large'/>}} 
                variant='outlined' 
                size='medium'
                inputProps={{style: {fontSize: 16}}}
                className='mt-10 text-[16px]'
                sx={{
                    "& label.Mui-focused": {
                      display: "none"
                    },
                    "& legend": {
                      display: "none"
                    }
                  }}
            />
            <Typography className='block text-4xl mt-10 mb-10'>Jelajahi</Typography>
            <Typography className='block text-4xl mb-10'>Produk</Typography>
            <Typography className='block text-4xl'>Masuk</Typography>
        </div>
        <div className={style.drawerWrapper} onClick={onClick}>
        </div>
    </>
)

export default CustomDrawer;