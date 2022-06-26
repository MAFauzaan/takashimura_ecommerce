import React, { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Tabs, Tab } from '@mui/material';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';
import { useAccount } from './hooks/useAccount';
import { LogOutButton } from '../../components/CustomButtons';
import { onLogout } from '../../store/reducers/userSlice';
import HistoryTable from './components/HistoryTable';
import UserSettings from './components/UserSettings';
import { useAppDispatch } from '../../store/hooks';
import { useRouter } from 'next/router';

const AccountSettings = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { replace } = router;
    const { windowWidth } = useDynamicScreen();
    const { selectedTab, onChangeSelectedTab, selectedStatusButton, 
        setSelectedStatusButton, isModalOpened, onCloseModal, 
        onChangeSelectedStatusButton, onChangeTextfield
    } = useAccount();


    const containerClass = () => {
        if (windowWidth >= 1100) {
            return 'pt-[52px] pb-[72px] px-[240px] w-full';
        }
        if (windowWidth > 600 && windowWidth < 1100) {
            return 'pt-[52px] pb-[72px] px-[24px] w-full';
        }
        if (windowWidth < 600 && windowWidth > 530) {
            return 'pt-[40px] pb-[40px] px-[24px] w-full';
        }
        return 'pt-[40px] pb-[40px] px-0 w-full'
    };

    const onClickLogout = () => {
        dispatch(onLogout());
        replace('/login')
    }

    return (
        <div className={`${containerClass()} bg-[#F8F9hFA]`}>
            <div className='flex mb-[28px]'>
                <div className='bg-white w-[40px] h-[40px] rounded-full flex place-items-center justify-center'>
                    <ArrowLeftOutlined className='text-[16px]' />
                </div>
                <p className='text-[24px] block font-semibold ml-[16px]'>{selectedTab === 0 ? 'Pengaturan Akun' : 'Riwayat Pembelian'}</p>
            </div>
            <div className='bg-white'>
                <Tabs value={selectedTab} onChange={onChangeSelectedTab}>
                    <Tab label="Pengaturan Akun" sx={{ textTransform: 'none', fontSize: '14px' }} />
                    <Tab label="Riwayat Pembelian" sx={{ textTransform: 'none', fontSize: '14px' }} />
                </Tabs>
            </div>
            {
                selectedTab === 0 ?
                    <UserSettings />
                    :
                    <HistoryTable 
                        onChangeSelectedStatusButton={onChangeSelectedStatusButton} 
                        selectedStatusButton={selectedStatusButton} 
                        setSelectedStatusButton={setSelectedStatusButton}
                        isModalOpened={isModalOpened} 
                        onCloseModal={onCloseModal}
                        onChangeTextfield={onChangeTextfield}
                    />
            }
            <div className='flex justify-end mt-[16px]'>
                <LogOutButton
                    variant='outlined'
                    size='large'
                    sx={{ textTransform: 'none' }}
                    onClick={onClickLogout}
                >
                    Keluar dari akun
                </LogOutButton>
            </div>
        </div>
    )
}

export default AccountSettings;