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
    const [selectedStatusButton, setSelectedStatusButton] = useState<{status: string, selectedOrder: any}>({
        status: '',
        selectedOrder: []
    });
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<any>([]);

    const onChangeSelectedTab = (event: any, newValue: number) => {
        setSelectedTab(newValue)
    };

    const onChangeSelectedStatusButton = (status: string, record: any) => {
        setIsModalOpened(true)
        setSelectedStatusButton({
            status,
            selectedOrder: record.items
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