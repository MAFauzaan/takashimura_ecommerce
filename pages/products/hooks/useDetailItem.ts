import React, { useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { checkUserData, onAddItem } from '../../../store/reducers/userSlice';
import { AddItemToCart } from '../services/item.service';

export const useDetailItem = (data: any) => {
    let  token: any;
    const dispatch = useAppDispatch();
    const customer = useAppSelector(checkUserData)
    const [selectedSize, setSelectedSize] = useState<any>('XXL');
    const [amount, setAmount] = useState<any>(0);
    const [price, setPrice] = useState(0)
    const [usedData, setUsedData] = useState({})

    const foundSizeVariant = data.sizevariants?.find((v: any) => v.size === selectedSize)
    const stock = data.sizevariants?.length > 0 ? Number(foundSizeVariant.stock): Number(data.variant.stock)

    const  onChangeSelectedSize = (value: any) => {
        setSelectedSize(value)
        setAmount(0)
        setPrice(Number(foundSizeVariant.price))
    }

    const onChangeSetAmount = (type: any) => {
        if (type === 'addition') {
            if (amount === stock) setAmount(amount);
            else setAmount(amount + 1)
        } else if (amount !== 0) {
            setAmount(amount - 1)
        }
    }

    const onClickAddToCart = async () => {
        const constructData = {
            productid: data.productid,
            name: data.productname,
            photos: data.photos,
            detail: {
                subtotal: amount * price,
                amount,
                pricePerItem: price,
                size: selectedSize,
                sku: foundSizeVariant.sku
            }
        }
        console.log(constructData)
        dispatch(onAddItem(constructData))
        await AddItemToCart({productid: constructData.productid, detail: constructData.detail}, customer.customer_id, localStorage.getItem("token"))
    }

    useEffect(() => {
        if (data) {
            setPrice(Number(foundSizeVariant.price))
        }
    }, [data, foundSizeVariant.price]);

    useEffect(() => {
        token = localStorage.getItem("token");
    }, []);
    
    return {
        selectedSize,
        amount,
        onChangeSetAmount,
        onChangeSelectedSize,
        stock,
        price,
        onClickAddToCart
    }
} 