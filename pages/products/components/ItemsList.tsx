import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ItemCard from '../../../components/ItemCard/ItemCard';
import { useDynamicScreen } from '../../../common/hooks/useDynamicScreen';

import { ItemsList as list, IItems } from '../../../DUMMY/OptionsList';

interface IitemList {
    checked: any,
    onChangeSelectedItem: any,
    data: any
}

const ItemsList = ({ checked, onChangeSelectedItem, data }: IitemList) => {
    const router = useRouter();
    const { asPath } = router;
    const { windowWidth } = useDynamicScreen();
    console.log(data)
    return (
        <Row gutter={[16, 16]}>
            {
                data?.map((item: IItems) => {
                    return (
                        <Link key={item.id} href={`${asPath}/${item.id}`} passHref={true}>
                            <Col span={windowWidth >= 1280 ? 6 : 8}>
                                <ItemCard item={item} onChangeSelectedItem={onChangeSelectedItem}/>
                            </Col>
                        </Link>
                    )
                })
            }
        </Row>
    )
}

export default ItemsList;