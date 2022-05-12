import React from 'react';
import { Collapse, Checkbox, Pagination } from 'antd';
import { Grid, TextField, Typography, InputAdornment } from '@mui/material';
import { useDynamicScreen } from '../../../common/hooks/useDynamicScreen';
import { ItemsList as dataList, IitemList } from '../../../DUMMY/OptionsList';
import { useItemsList } from '../hooks/useItemsList';
import ItemsList from '../components/ItemsList';

const { Panel } = Collapse;

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
                        <Collapse
                            expandIconPosition="right"
                        >
                            <Panel
                                header={
                                    <>
                                        <Typography className='text-[16px] text-[#001219] font-semibold'>Keranjang</Typography>
                                    </>
                                }
                                key="1"
                            >
                                <Checkbox.Group options={listName} value={checkedList} onChange={onChangeCheckedList}>
                                    {
                                        listName.map((listItem: any) => (
                                            <Grid container key={listItem}>
                                                <Grid item xs={12}>
                                                    <Checkbox value={listItem} onClick={onChangeCheckedList}>{listItem}</Checkbox>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </Checkbox.Group>
                            </Panel>
                        </Collapse>
                    </Grid>
                    <Grid xs={6}>
                        <Collapse
                            defaultActiveKey={['1']}
                            expandIconPosition="right"
                        >
                            <Panel
                                header={
                                    <>
                                        <Typography className='text-[16px] text-[#001219] font-semibold'>Sortir</Typography>
                                    </>
                                }
                                key="1"
                            >
                                <TextField
                                    placeholder='Harga Termurah'
                                    value={sortFromCheapest}
                                    onChange={onChangeSortFromCheapest}
                                    className='mb-[20px]'
                                    variant='outlined'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                    }}
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
                                    placeholder='Harga Termahal'
                                    value={sortFromMostExpensive}
                                    onChange={onChangeSortFromMostExpensive}
                                    variant='outlined'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                    }}
                                    sx={{
                                        "& label.Mui-focused": {
                                            display: "none"
                                        },
                                        "& legend": {
                                            display: "none"
                                        }
                                    }}
                                />
                            </Panel>
                        </Collapse>
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
                                        <Collapse
                                            defaultActiveKey={['1']}
                                            expandIconPosition="right"
                                            className='mt-[40px]'
                                        >
                                            <Panel
                                                header={
                                                    <>
                                                        <Typography className='text-[16px] text-[#001219] font-semibold'>Keranjang</Typography>
                                                    </>
                                                }
                                                key="1"
                                            >
                                                <Checkbox.Group options={listName} value={checkedList} onChange={onChangeCheckedList}>
                                                    {
                                                        listName.map((listItem: any) => (
                                                            <Grid container key={listItem}>
                                                                <Grid item xs={12}>
                                                                    <Checkbox value={listItem} onClick={onChangeCheckedList}>{listItem}</Checkbox>
                                                                </Grid>
                                                            </Grid>
                                                        ))
                                                    }
                                                </Checkbox.Group>
                                            </Panel>
                                        </Collapse>
                                        <Collapse
                                            defaultActiveKey={['1']}
                                            expandIconPosition="right"
                                            className='mt-[20px]'
                                        >
                                            <Panel
                                                header={
                                                    <>
                                                        <Typography className='text-[16px] text-[#001219] font-semibold'>Sortir</Typography>
                                                    </>
                                                }
                                                key="1"
                                            >
                                                <TextField
                                                    placeholder='Harga Termurah'
                                                    value={sortFromCheapest}
                                                    onChange={onChangeSortFromCheapest}
                                                    className='mb-[20px]'
                                                    variant='outlined'
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                                    }}
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
                                                    placeholder='Harga Termahal'
                                                    value={sortFromMostExpensive}
                                                    onChange={onChangeSortFromMostExpensive}
                                                    variant='outlined'
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                                    }}
                                                    sx={{
                                                        "& label.Mui-focused": {
                                                            display: "none"
                                                        },
                                                        "& legend": {
                                                            display: "none"
                                                        }
                                                    }}
                                                />
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </Grid>
                                <Grid item xs={9}>
                                    <ItemsList checked={checkedList} onChangeSelectedItem={onChangeSelectedItem}/>
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
                                    <ItemsList checked={checkedList} onChangeSelectedItem={onChangeSelectedItem}/>
                                </Grid>
                            </Grid>
                        </div>
                }
                <Pagination
                    current={page}
                    onChange={onChangePage}
                    total={50}
                    className="mt-[44px] text-right"
                />
            </div>
        </>
    )
}

export default ProductsPage;