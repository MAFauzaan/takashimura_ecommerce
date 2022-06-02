import React from 'react';
import {
    Grid, TextField, Typography,
    AccordionSummary,  AccordionDetails, FormControlLabel, 
    FormGroup, Checkbox, Pagination
} from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material'
import { useDynamicScreen } from '../../../common/hooks/useDynamicScreen';
import { ItemsList as dataList, IitemList } from '../../../DUMMY/OptionsList';
import { useItemsList } from '../hooks/useItemsList';
import ItemsList from '../components/ItemsList';
import { CustomAccordion } from '../components/CustomAccordion';

const ProductsPage = () => {
    const { windowWidth } = useDynamicScreen();
    const {
        checkedList, onChangeCheckedList,
        sortFromMostExpensive, sortFromCheapest,
        onChangeSortFromCheapest, onChangeSortFromMostExpensive,
        onChangePage, page, onChangeSelectedItem
    } = useItemsList();

    const listName = dataList.map((item: IitemList) => item.name)

    return (
        <>
            {/* Mobile Sort */}
            {
                windowWidth < 800 &&
                <Grid container>
                    <Grid item xs={6}>
                        <CustomAccordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreOutlined />}
                                id='item-detail'
                            >
                                <Typography className='text-[16px] font-semibold'>Kategori</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ paddingTop: 0 }}>
                                <FormGroup>
                                    {
                                        listName.map((item: any) => (
                                            <FormControlLabel 
                                                key={item} 
                                                control={<Checkbox />} 
                                                label={<Typography className='text-[14px]'>{item}</Typography>} 
                                                sx={{ fontSize: '16px' }} 
                                            />
                                        ))
                                    }
                                </FormGroup>
                            </AccordionDetails>
                        </CustomAccordion>
                    </Grid>
                    <Grid xs={6}>
                        <CustomAccordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreOutlined />}
                                id='item-detail'
                            >
                                <Typography className='text-[16px] font-semibold'>Sortir</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    fullWidth
                                    placeholder='Dari Harga Termurah'
                                    value={sortFromCheapest}
                                    onChange={onChangeSortFromCheapest}
                                    inputProps={{style: {fontSize: 14}}}
                                    variant='outlined'
                                    className='mb-[16px]'
                                    sx={{
                                        "& label.Mui-focused": {
                                            display: "none"
                                        },
                                        "& legend": {
                                            display: "none"
                                        }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    placeholder='Dari Harga Termahal'
                                    value={sortFromMostExpensive}
                                    onChange={onChangeSortFromMostExpensive}
                                    inputProps={{style: {fontSize: 14}}}
                                    variant='outlined'
                                    className='mb-[16px]'
                                    sx={{
                                        "& label.Mui-focused": {
                                            display: "none"
                                        },
                                        "& legend": {
                                            display: "none"
                                        }
                                    }}
                                />
                            </AccordionDetails>
                        </CustomAccordion>
                    </Grid>
                </Grid>
            }
            <div className={`${windowWidth >= 1100 ? 'px-[120px] py-[40px]' : windowWidth >= 800 && windowWidth < 1100 ? 'px-[24px] py-[40px]' : 'px-[16px]'} min-h-screen`}>
                {
                    windowWidth >= 800 ?
                        <>
                            <Grid container>
                                <Grid item xs={24}>
                                    <Typography className='text-[24px] font-semibold text-[#001219] mb-[40px]'>Semua Produk</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3}>
                                    <div className='w-[200px]'>
                                        <CustomAccordion className='mb-[32px]'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreOutlined />}
                                                id='item-detail'
                                            >
                                                <Typography className='text-[16px] font-semibold'>Kategori</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ paddingTop: 0 }}>
                                                <FormGroup>
                                                    {
                                                        listName.map((item: any) => (
                                                            <FormControlLabel key={item} control={<Checkbox />} label={item} sx={{ fontSize: '16px' }} />
                                                        ))
                                                    }
                                                </FormGroup>
                                            </AccordionDetails>
                                        </CustomAccordion>
                                        <CustomAccordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreOutlined />}
                                                id='item-detail'
                                            >
                                                <Typography className='text-[16px] font-semibold'>Sortir</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <TextField
                                                    fullWidth
                                                    placeholder='Dari Harga Termurah'
                                                    value={sortFromCheapest}
                                                    onChange={onChangeSortFromCheapest}
                                                    variant='outlined'
                                                    className='mb-[16px]'
                                                    sx={{
                                                        "& label.Mui-focused": {
                                                            display: "none"
                                                        },
                                                        "& legend": {
                                                            display: "none"
                                                        }
                                                    }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    placeholder='Dari Harga Termurah'
                                                    value={sortFromMostExpensive}
                                                    onChange={onChangeSortFromMostExpensive}
                                                    variant='outlined'
                                                    className='mb-[16px]'
                                                    sx={{
                                                        "& label.Mui-focused": {
                                                            display: "none"
                                                        },
                                                        "& legend": {
                                                            display: "none"
                                                        }
                                                    }}
                                                />
                                            </AccordionDetails>
                                        </CustomAccordion>
                                    </div>
                                </Grid>
                                <Grid item xs={9}>
                                    <ItemsList checked={checkedList} onChangeSelectedItem={onChangeSelectedItem} />
                                </Grid>
                            </Grid>
                        </>
                        :
                        <div className='mt-[32px]'>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className='text-[24px] font-semibold text-[#001219] mb-[40px]'>Semua Produk</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <ItemsList checked={checkedList} onChangeSelectedItem={onChangeSelectedItem} />
                                </Grid>
                            </Grid>
                        </div>
                }
                <Pagination
                    count={5}
                    size='medium'
                    color='secondary'
                    onChange={onChangePage}
                    className="mt-[44px] text-[14px]"
                />
            </div>
        </>
    )
}

export default ProductsPage;