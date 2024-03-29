import React, { useMemo } from 'react';
import { Table } from 'antd';
import { orders } from '../../../DUMMY/CartList';
import { useDynamicScreen } from '../../../common/hooks/useDynamicScreen';
import { tableColumns as column, phoneTableColumn } from './TableColumn';
import StatusModal from './Modals/StatusModal';
import ReviewModal from './Modals/ReviewModal';
import { useAppSelector } from '../../../store/hooks';
import { checkUserData } from '../../../store/reducers/userSlice';

type History = {
    onChangeSelectedStatusButton: any,
    selectedStatusButton: any,
    isModalOpened: any,
    onCloseModal: any,
    setSelectedStatusButton: any
    onChangeTextfield: any
}

const HistoryTable = (
    { onChangeSelectedStatusButton, selectedStatusButton, isModalOpened,
        onCloseModal, setSelectedStatusButton, onChangeTextfield
    }: History
) => {
    const orderHistory = useAppSelector(checkUserData).orderhistory;
    const { windowWidth } = useDynamicScreen();
    const tableColumns = useMemo(() => column(onChangeSelectedStatusButton), [onChangeSelectedStatusButton]);
    const phoneColumns = useMemo(() => phoneTableColumn(onChangeSelectedStatusButton), [onChangeSelectedStatusButton])
    console.log(orderHistory)
    return (
        <div className={`${windowWidth >= 1100 ? 'p-[32px]' : windowWidth > 600 && windowWidth < 1000 ? 'p-[24px]' : 'p-[16px]'} bg-white`}>
            {
                windowWidth > 600 ?
                    <Table
                        dataSource={orderHistory ? orderHistory : []}
                        columns={[
                            tableColumns.item,
                            tableColumns.amount,
                            tableColumns.subtotal,
                            tableColumns.status
                        ]}
                        pagination={{ pageSize: 3 }}
                        className='mt-[16px]'
                    />
                    :
                    <Table
                        dataSource={orderHistory ? orderHistory : []}
                        columns={[phoneColumns.orderedItem]}
                        pagination={{ pageSize: 3 }}
                        className='mt-[16px]'
                    />
            }
            {
                selectedStatusButton.status === 'shipment' ?
                    <StatusModal
                        isOpen={isModalOpened}
                        onClose={onCloseModal}
                        selectedStatusButton={selectedStatusButton}
                        setSelectedStatusButton={setSelectedStatusButton}
                    />
                    :
                    <ReviewModal
                        isOpen={isModalOpened}
                        onClose={onCloseModal}
                        selectedStatusButton={selectedStatusButton}
                        setSelectedStatusButton={setSelectedStatusButton}
                        onChangeTextfield={onChangeTextfield}
                    />
            }
        </div>
    )
}

export default HistoryTable;