import React, { useEffect, useState } from 'react';
import { setUserSelectedItem } from '../../../store/reducers/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { capitalizeFirstLetter } from '../../../common/helpers/textHelpers';

type checkbox = {
    checked: boolean,
    type: any
}

export const useItemsList = () => {
    const { replace, query, push } = useRouter()
    const dispatch = useDispatch();
    console.log(query)
    const [checkedList, setCheckedList] = useState<any>('Mukena');
    const [sortFromCheapest, setSortFromCheapest] = useState<number | string>('');
    const [sortFromMostExpensive, setSortFromMostExpensive] = useState<number | string>('');
    const [page, setPage] = useState<any>(1);
    const [clickedCheckBox, setClickedCheckbox] = useState<checkbox>({
        checked: true,
        type: capitalizeFirstLetter(query.type) 
    })
    console.log(clickedCheckBox)

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
        setPage(page)
    }

    const onChangeSelectedItem = (item: any) => {
        push(`/products/${item.category.toLowerCase()}/${item.productid}`)
    }

    const onClickCheckBox = (value: string) => {
        if (clickedCheckBox.type === value) {
            setClickedCheckbox({
                checked: true,
                type: value
            })
        } else {
            setClickedCheckbox({
                checked: true,
                type: value
            })
        }
    }

    useEffect(() => {
        if (clickedCheckBox.type) {
            push(`/products/${clickedCheckBox.type.toLowerCase()}?page=1`)
        }
    }, [clickedCheckBox.type]);

    return {
        checkedList,
        sortFromCheapest,
        sortFromMostExpensive,
        page,
        onChangeCheckedList,
        onChangeSortFromCheapest,
        onChangeSortFromMostExpensive,
        onChangePage,
        onChangeSelectedItem,
        onClickCheckBox,
        clickedCheckBox
    }

}