import React from 'react';
import { Row, Col, Collapse, Typography, Checkbox, Input, Card, Pagination } from 'antd';
import { useDynamicScreen } from '../../../common/hooks/useDynamicScreen';
import { ItemsList as dataList, IitemList } from '../../../DUMMY/OptionsList';
import { useItemsList } from '../hooks/useItemsList';
import ItemsList from '../components/ItemsList';

const { Panel } = Collapse;
const { Text } = Typography;

const ProductsPage = () => {
    const { windowWidth } = useDynamicScreen();
    const {
        checkedList, onChangeCheckedList,
        sortFromMostExpensive, sortFromCheapest,
        onChangeSortFromCheapest, onChangeSortFromMostExpensive,
        onChangePage, page
    } = useItemsList();

    const listName = dataList.map((item: IitemList) => item.name)

    return (
        <div className='min-h-screen px-[120px] py-[40px]'>
            {
                windowWidth >= 1100 ?
                    <>
                        <Row>
                            <Col span={24}>
                                <Text className='text-[24px] font-semibold text-[#001219] mb-[40px]'>Semua Produk</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <div className='w-[200px]'>
                                    <Collapse
                                        defaultActiveKey={['1']}
                                        expandIconPosition="right"
                                        className='mt-[40px]'
                                    >
                                        <Panel
                                            header={
                                                <>
                                                    <Text className='text-[16px] text-[#001219] font-semibold'>Keranjang</Text>
                                                </>
                                            }
                                            key="1"
                                        >
                                            <Checkbox.Group options={listName} value={checkedList} onChange={onChangeCheckedList}>\
                                               {
                                                   listName.map((listItem: any) => (
                                                       <Row key={listItem}>
                                                           <Col span={24}>
                                                               <Checkbox value={listItem} onClick={onChangeCheckedList}>{listItem}</Checkbox>
                                                           </Col>
                                                       </Row>
                                                   ))
                                               }
                                            </Checkbox.Group>
                                        </Panel>
                                    </Collapse>
                                    <Collapse
                                        defaultActiveKey={['1']}
                                        expandIconPosition="right"
                                        className='mt-[20px]'
                                    >
                                        <Panel
                                            header={
                                                <>
                                                    <Text className='text-[16px] text-[#001219] font-semibold'>Sortir</Text>
                                                </>
                                            }
                                            key="1"
                                        >
                                            <Input prefix={<Text>Rp</Text>} placeholder='Harga Termurah' value={sortFromCheapest} onChange={onChangeSortFromCheapest} className='mb-[20px]' />
                                            <Input prefix={<Text>Rp</Text>} placeholder='Harga Termahal' value={sortFromMostExpensive} onChange={onChangeSortFromMostExpensive} />
                                        </Panel>
                                    </Collapse>
                                </div>
                            </Col>
                            <Col span={18}>
                                <ItemsList checked={checkedList} />
                            </Col>
                        </Row>
                    </>
                    :
                    ""
            }
            <Pagination 
                current={page} 
                onChange={onChangePage} 
                total={50} 
                className="mt-[44px] text-right"
            />
        </div>
    )
}

export default ProductsPage;