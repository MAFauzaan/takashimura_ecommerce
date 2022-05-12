import React from 'react';
import {
    Divider, Grid, Modal,
    Typography, Accordion, AccordionSummary,
    AccordionDetails, Stepper, StepLabel,
    Step
} from '@mui/material';
import { 
    Timeline, TimelineItem, TimelineSeparator,
    TimelineConnector, TimelineContent, TimelineDot,
    TimelineOppositeContent
} from '@mui/lab'
import ItemMiniDescription from '../../../../components/ItemMiniDescription/ItemMiniDescription';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../../../../styles/_modal.module.scss';

type modal = {
    isOpen: boolean,
    onClose: any,
    selectedStatusButton: any,
    setSelectedStatusButton: any
}

const StatusModal = ({ isOpen, onClose, selectedStatusButton }: modal) => {
    console.log(selectedStatusButton.shipmentStatuses.reverse())
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
        >
            <div className={styles.modalWrapper}>
                <div className='relative h-[80px] p-[24px] text-center'>
                    <Typography className='text-[24px] text-[#001219] font-medium'>Status Pembelian</Typography>
                    <div
                        className='absolute bg-[#F8F9FA] w-[32px] h-[32px] flex place-items-center justify-center rounded-full top-10 right-10 cursor-pointer'
                        onClick={onClose}
                    >
                        <CloseIcon fontSize='large' />
                    </div>
                </div>
                <div className='mx-[24px] my-[16px]'>
                    <Grid container>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography className='text-[14px] text-[#4F555B]'>No. Invoice</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className='text-[14px] text-[#BD0029] font-medium'>{selectedStatusButton.invoiceNumber}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item className='mt-[16px]'>
                            <Grid item xs={4}>
                                <Typography className='text-[14px] text-[#4F555B]'>Tanggal Pembelian</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className='text-[14px] text-[#001219] font-medium'>{selectedStatusButton.date}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className='bg-[#F8F9FA] h-[16px]' />
                <Accordion sx={{boxShadow: 'none'}}>
                    <AccordionSummary
                        expandIcon={(
                            <>
                                <ExpandMoreIcon fontSize='large' sx={{ color: '#BD0029' }} />
                            </>
                        )}
                        sx={{
                            boxShadow: 'none',
                            paddingX: '24px',
                            paddingY: '16px'
                        }}
                    >
                        <Typography className='text-[14px] text-[#4F555B] w-1/3'>Status Pengiriman</Typography>
                        <Typography className='text-[14px] text-[#001219] font-semibold'>{selectedStatusButton.statusLabel}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='border p-[16px] w-[440px] flex place-content-center'>
                            <Timeline>
                                {
                                    selectedStatusButton.shipmentStatuses.reverse().map((item: any, index: number) => (
                                        <TimelineItem key={item.id}>
                                            <TimelineOppositeContent className='text-[#4F555B] text-[12px]'>{item.date} </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color={index === 0 ? 'success' : undefined }/>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent className='text-[#001219] text-[12px]'>{item.label}</TimelineContent>
                                        </TimelineItem>
                                    ))
                                }
                            </Timeline>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <div className='bg-[#F8F9FA] h-[16px]' />
                <div className='px-[24px] py-[16px]'>
                    <Typography className='text-[14px] text-[#001219] font-semibold'>Detail Produk</Typography>
                    <div className='mt-[8px]'>
                        {
                            selectedStatusButton.selectedOrder.map((order: any) => (
                                <div key={order.id} className='px-[16px] py-[24px] border mb-[8px]'>
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <ItemMiniDescription itemName={order.name} itemPrice={order.price} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography className='text-[12px] text-[#343A40]'>Qty : {order.amount}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography className='text-[12px] text-[#001219]'>{order.amount * order.price}</Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='bg-[#F8F9FA] h-[16px]' />
                <div className='px-[24px] py-[16px]'>
                    <Typography className='text-[14px] text-[#001219] font-semibold mb-[16px]'>Informasi Pengiriman</Typography>
                    <Grid container>
                        <Grid container item className='mb-[16px]'>
                            <Grid item xs={4}>
                                <Typography className='text-[14px] text-[#4F555B]'>Alamat</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className='text-[14px] text-[#001219]'>{selectedStatusButton.customer.address}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography className='text-[14px] text-[#4F555B]'>Nomor Telepon</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className='text-[14px] text-[#001219]'>{selectedStatusButton.customer.phoneNumber}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className='bg-[#F8F9FA] h-[16px]' />
                <div className='px-[24px] pt-[16px] pb-[40px]'>
                    <Typography className='text-[14px] text-[#001219] font-semibold mb-[16px]'>Rincian Pembayaran</Typography>
                    <Grid container>
                        <Grid container item className='mb-[16px]'>
                            <Grid item xs={4}>
                                <Typography className='text-[14px] text-[#4F555B]'>Harga Barang</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className='text-[14px] text-[#001219]'>{selectedStatusButton.paymentDetails.sub}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography className='text-[14px] text-[#4F555B]'>Ongkos Kirim</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className='text-[14px] text-[#001219]'>{selectedStatusButton.paymentDetails.shipmentFee}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider className='my-[16px]' />
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography className='text-[14px] text-[#4F555B]'>Total Harga</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className='text-[14px] text-[#001219] font-semibold'>{selectedStatusButton.paymentDetails.total}</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Modal>
    )
}

export default StatusModal;