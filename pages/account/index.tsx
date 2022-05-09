import React, { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Tabs, Tab } from '@mui/material';
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';
import { useAppSelector } from '../../store/hooks';
import { checkUserData } from '../../store/reducers/userSlice';
import { useAccount } from './hooks/useAccount';
import { LogOutButton } from './components/CustomButtons';
import HistoryTable from './components/HistoryTable';
import UserSettings from './components/UserSettings';

const AccountSettings = () => {

    const { windowWidth } = useDynamicScreen();
    const { selectedTab, onChangeSelectedTab, selectedStatusButton, 
        setSelectedStatusButton, isModalOpened, onCloseModal, 
        onChangeSelectedStatusButton, onChangeTextfield
    } = useAccount();
    // const [userData, setUserData] = useState<any>(useAppSelector(checkUserData))
    // console.log(selectedTab, 'zzz')

    const containerClass = () => {
        if (windowWidth >= 1100) {
            return 'pt-[52px] pb-[72px] px-[240px] w-full';
        }
        if (windowWidth > 600 && windowWidth < 1000) {
            return 'pt-[52px] pb-[72px] px-[24px] w-full';
        }
        if (windowWidth < 600 && windowWidth > 530) {
            return 'pt-[40px] pb-[40px] px-[24px] w-full';
        }
        return 'pt-[40px] pb-[40px] px-0 w-full'
    };

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
                >
                    Keluar dari akun
                </LogOutButton>
            </div>
        </div>
    )
}

export default AccountSettings;