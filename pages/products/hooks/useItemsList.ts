import React, { useState } from 'react';
import { setUserSelectedItem } from '../../../store/reducers/userSlice';
import { useDispatch } from 'react-redux';

export const useItemsList = () => {
    const dispatch = useDispatch();
    const [ checkedList, setCheckedList ] = useState<any>('Mukena');
    const [ sortFromCheapest, setSortFromCheapest] = useState<number | string>('');
    const [ sortFromMostExpensive, setSortFromMostExpensive] = useState<number | string>('');
    const [ page, setPage  ] = useState<any>('');

    const onChangeCheckedList = (value: any) => {
        if (value.length > 1) {
            const newValue = value.pop();
            setCheckedList(newValue)
        } else {
            setCheckedList(value.toString())
        }
    };
    
    const onChangeSortFromCheapest = (event: any) => {
        const { target: { value } } = event;        
        setSortFromCheapest(value)
    };

    const onChangeSortFromMostExpensive = (event: any) => {
        const { target: { value } } = event;        
        setSortFromMostExpensive(value)    
    };

    const onChangePage = (page: any) => {
        console.log(page)
        setPage(page)
    }

    const onChangeSelectedItem = (selectedItem: any) => {
        dispatch(setUserSelectedItem(selectedItem))
    }
    
    return {
        checkedList,
        sortFromCheapest,
        sortFromMostExpensive,
        page,
        onChangeCheckedList,
        onChangeSortFromCheapest,
        onChangeSortFromMostExpensive,
        onChangePage,
        onChangeSelectedItem
    }

}