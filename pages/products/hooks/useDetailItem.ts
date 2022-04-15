import React, { useState, useEffect} from 'react';


export const useDetailItem = () => {
    const [selectedSize, setSelectedSize] = useState<any>('XL');
    const [amount, setAmount] = useState<any>(0);

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

    console.log(amount)
    return {
        selectedSize,
        amount,
        onChangeSetAmount,
        onChangeSelectedSize
    }
} 