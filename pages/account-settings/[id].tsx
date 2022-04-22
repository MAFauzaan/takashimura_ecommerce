import React, { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Input, Row, Col, Table } from 'antd';
import { Grid, Typography } from '@mui/material';
import { clone } from 'ramda';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';
import { useAppSelector } from '../../store/hooks';
import { checkUserData } from '../../store/reducers/userSlice';
import { CartList } from '../../DUMMY/CartList';
import { tableColumns, phoneTableColumn } from './components/TableColumn';

const AccountSettings = () => {

    const { windowWidth } = useDynamicScreen();
    const [userData, setUserData] = useState<any>(useAppSelector(checkUserData))
    console.log(userData)
    const containerClass = () => {
        if (windowWidth >= 1000) {
            return 'pt-[52px] pb-[72px] px-[240px] w-full';
        }
        if (windowWidth > 600 && windowWidth < 1000) {
            return 'pt-[52px] pb-[72px] px-[24px] w-full';
        }
        return 'pt-[40px] pb-[40px] px-[24px] w-full';
    };

    const userFormArray = ["Nama", "Email", "Alamat", "Negara", " Kode Pos", "Nomor Telepon"];

    const onFindUserDataValue = (type: string) => {
        const clonedUserData = clone(userData);

    }

    return (
        <div className={`${containerClass()} bg-[#F8F9FA]`}>
            <div className='flex mb-[28px]'>
                <div className='bg-white w-[40px] h-[40px] rounded-full flex place-items-center justify-center'>
                    <ArrowLeftOutlined className='text-[16px]' />
                </div>
                <p className='text-[24px] block font-semibold ml-[16px]'>Pengaturan Akun</p>
            </div>
            <div className='bg-white p-[32px] mb-[16px]'>
                {
                    userFormArray.map((user: any, index) => {
                        return (
                            <Grid container key={index} className='text-[16px] mb-[16px]'>
                                <Grid item xs={4}>
                                    <Typography className='block text-[#4F555B]'>{user}</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Input />
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </div>
            <div className={`${windowWidth >= 1100 ? 'p-[32px]' : windowWidth > 600 && windowWidth < 1000 ? 'p-[24px]' : 'p-[16px]'} bg-white`}>
                <Typography className='text-[16px] text-[#4F555B] mb-[16px]'>Riwayat Pembelian</Typography>
                {
                    windowWidth > 600 ?
                    <Table dataSource={CartList} columns={tableColumns} pagination={{ pageSize: 3 }} className='mt-[16px]' />
                    :
                    <Table dataSource={CartList} columns={phoneTableColumn} pagination={{ pageSize: 3 }} className='mt-[16px]' />
                }
            </div>
            <div className='flex justify-end mt-[16px]'>
                <div className='w-[180px] text-center py-[8px] border border-[#343A40]'>
                    <Typography className='text-[16px] font-semibold'>Keluar dari akun</Typography>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;