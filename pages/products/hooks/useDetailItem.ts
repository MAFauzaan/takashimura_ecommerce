import React, { useState, useEffect} from 'react';
import { checkSelectedItem } from '../../../store/reducers/userSlice';
import { useAppSelector } from '../../../store/hooks';

export const useDetailItem = () => {
    const [selectedSize, setSelectedSize] = useState<any>('XL');
    const [amount, setAmount] = useState<any>(0);
    const [selectedItem, setSelectedItem] = useState<any>(useAppSelector(checkSelectedItem))

    const  onChangeSelectedSize = (value: any) => {
        setSelectedSize(value)
    }

    const onChangeSetAmount = (type: any) => {
        console.log(type)
        if (type === 'addition') {
            setAmount(amount + 1)
        } else if (amount !== 0) {
            setAmount(amount - 1)
        }
    }

    return {
        selectedSize,
        amount,
        onChangeSetAmount,
        onChangeSelectedSize,
        selectedItem
    }
} 