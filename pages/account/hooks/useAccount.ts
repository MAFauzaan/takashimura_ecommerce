import { AnyObject } from 'immer/dist/internal';
import { clone } from 'ramda';
import React, { useState } from 'react';
import { ICartList, orders } from '../../../DUMMY/CartList'

type useAccountHook = () => {
    selectedTab: number,
    onChangeSelectedTab: (event: any, newValue: number) => void,
    onChangeSelectedStatusButton: (status: string, record: any) => void,
    selectedStatusButton: any,
    isModalOpened: boolean,
    onCloseModal: () => void,
    cartItems: ICartList[],
    setCartItems: any,
    setSelectedStatusButton: any,
    onChangeTextfield: (event: any, id: AnyObject) => void;
}

export const useAccount: useAccountHook = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [selectedStatusButton, setSelectedStatusButton] = useState<any>({
        id: '',
        invoiceNumber: '',
        date: '',
        status: '',
        shipmentStatuses: [],
        statusLabel: '',
        selectedOrder: []
    });
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<any>([]);

    const onChangeSelectedTab = (event: any, newValue: number) => {
        setSelectedTab(newValue)
    };

    const onChangeSelectedStatusButton = (status: string, record: any) => {
        console.log(record)
        setIsModalOpened(true)
        setSelectedStatusButton({
            id: record.id,
            invoiceNumber: record.invoiceNumber,
            date: record.date,
            customer: record.customer,
            status,
            shipmentStatuses: record.shipmentStatuses.reverse(),
            statusLabel: record.statusLabel,
            selectedOrder: record.items,
            paymentDetails: record.paymentDetails
        })
    };

    const onChangeTextfield = (event: any, id: any) => {
        const clonedSelectedStatusButton = clone(selectedStatusButton);
        const foundCartItemIndex = clonedSelectedStatusButton.selectedOrder.findIndex((item: any) => item.id === id)
        clonedSelectedStatusButton.selectedOrder[foundCartItemIndex].review = event.target.value;
        setSelectedStatusButton(clonedSelectedStatusButton)
    }

    const onCloseModal = () => {
        setIsModalOpened(false)
    };

    return {
        selectedTab,
        selectedStatusButton,
        onChangeSelectedTab,
        onChangeSelectedStatusButton,
        onCloseModal,
        isModalOpened,
        cartItems,
        setCartItems,
        setSelectedStatusButton,
        onChangeTextfield
    }
}