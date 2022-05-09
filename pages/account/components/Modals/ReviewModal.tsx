import React from 'react';
import { clone } from 'ramda';
import { Modal, Divider, Typography, Grid, Rating, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StatusButton } from '../CustomButtons';
import styles from '../../../../styles/_modal.module.scss';

type modal = {
    isOpen: boolean,
    onClose: any,
    selectedStatusButton: any,
    setSelectedStatusButton: any,
    onChangeTextfield: any
}

const ReviewModal = ({ isOpen, onClose, selectedStatusButton, setSelectedStatusButton, onChangeTextfield }: modal) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
        >
            <div className={styles.modalWrapper}>
                <div className='relative h-[80px] p-[24px] text-center'>
                    <Typography className='text-[24px] text-[#001219] font-medium'>Beri Ulasan</Typography>
                    <div
                        className='absolute bg-[#F8F9FA] w-[32px] h-[32px] flex place-items-center justify-center rounded-full top-10 right-10 cursor-pointer'
                        onClick={onClose}
                    >
                        <CloseIcon fontSize='large' />
                    </div>
                </div>
                <Divider />
                <div className='p-[24px] h-[616px] overflow-y-auto'>
                    {
                        selectedStatusButton.selectedOrder?.map((cartItem: any) => {
                            return (
                                <div key={cartItem.id} className='mb-[24px]'>
                                    <Grid container className='mb-[24px]'>
                                        <Grid item xs={8} className='flex place-items-center'>
                                            <div className='w-[64px] h-[64px] bg-slate-700 inline-block' />
                                            <div className='inline-block ml-[12px]'>
                                                <Typography className='text-[14px] text-[#001219]'>{cartItem.name}</Typography>
                                                <Typography className='text-[12px] text-[#343A40]'>{cartItem.price}</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={2} className='flex place-items-center'>
                                            <Typography className='text-[12px] text-[#343A40]'>Qty : {cartItem.amount}</Typography>
                                        </Grid>
                                        <Grid item xs={2} className='flex place-items-center'>
                                            <Typography className='text-[14px] text-[#001219] font-semibold'>Rp {cartItem.amount * cartItem.price}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography className='text-[14px] text-[#343A40]'>Beri Rating pada Produk :</Typography>
                                        </Grid>
                                        <Grid item xs={6} className='flex place-items-center place-content-end mb-[16px]'>
                                            <Rating
                                                size='large'
                                                value={cartItem.rating}
                                                onChange={(event: any, newValue: any) => {
                                                    const clonedSelectedOrder = clone(selectedStatusButton);
                                                    const foundCartItemIndex = clonedSelectedOrder.selectedOrder.findIndex((item: any) => item.id === cartItem.id)
                                                    clonedSelectedOrder.selectedOrder[foundCartItemIndex].rating = newValue;
                                                    setSelectedStatusButton(clonedSelectedOrder)
                                                }}
                                            />
                                            <Typography className='text-[14px] text-[#343A40] ml-[18px]'>{cartItem.rating ? cartItem.rating : 0} Bintang</Typography>
                                        </Grid>
                                    </Grid>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        placeholder="Tulis review produk"
                                        value={cartItem.review}
                                        onChange={(e: any) => onChangeTextfield(e, cartItem.id)}
                                        sx={{
                                            "& label.Mui-focused": {
                                                display: "none"
                                            },
                                            "& legend": {
                                                display: "none"
                                            }
                                        }}
                                    />
                                    <StatusButton
                                        style={{ background: '#BD0029' }}
                                        sx={{ 
                                            textTransform: 'none' ,
                                        }}
                                        className='float-right mt-[16px]'
                                    >
                                        Kirim Ulasan
                                    </StatusButton>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ReviewModal;