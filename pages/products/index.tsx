import React from 'react';
import { Button, Card, Grid, Link, Typography } from '@mui/material';
import { ReviewButton } from '../../components/CustomButtons';

const itemsCategories = [
    {
        id: 1,
        label: 'Mukena',
        href: '/products/mukena'
    },
    {
        id: 2,
        label: 'Daster',
        href: '/products/daster'
    },
    {
        id: 3,
        label: 'Batik',
        href: '/products/batik'
    },
    {
        id: 4,
        label: 'Alat-Alat Sholat',
        href: '/products/alatsholat'
    }
]

const ProductsPage = () => {
    return (
        <div className='flex place-items-center justify-center p-[60px]'>
            <Grid container className='flex justify-center' spacing={2}>
                {
                    itemsCategories.map((item: any) => (
                        <Grid item key={item.id}>
                            <Card className='w-[285px] h-[440px] flex place-items-center justify-center relative bg-[#A7A7A7]'>
                                <Typography className='text-[32px]'>{item.label}</Typography>
                                <Link href={item.href} className='absolute bottom-20' style={{textDecoration: 'none'}}>
                                    <ReviewButton sx={{fontSize: '12px', textDecoration: 'none'}} style={{background: '#ffff'}}>LIHAT PRODUK</ReviewButton>
                                </Link>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default ProductsPage;