import { Typography, Row, Col } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ItemMiniDescription from "../../../components/ItemMiniDescription/ItemMiniDescription";

const { Text } = Typography;

export const tableColumns = [
    {
        title: 'Barang',
        dataIndex: 'name',
        key: 'name',
        render: (text: any, record: any) => (
            <ItemMiniDescription itemName={record.name} itemPrice={record.price} />
        )
    },
    {
        title: 'Jumlah',
        dataIndex: 'amount'
    },
    {
        title: 'Subtotal',
        render: (text: any, record: any) => {
            const subtotal = record.amount * record.price;

            return (
                <Text className='text-[14px]'>{subtotal}</Text>
            )
        }
    }
];

export const phoneTableColumn = [ 
    {
        title: 'orderedItem',
        render: (text: any, record: any) => {
            return (
                <Row className='px-[16px] mb-[32px]'>
                <Col span={24} className='flex mb-12'>
                    <div className='w-[64px] h-[64px]  bg-red-700 inline-block' />
                    <div className='w-[184px] ml-[16px]'>
                        <Text className='text-[14px] inline-block w-full'>{record.name}</Text>
                        <Text className='text-[14px] inline-block font-medium'>{`Rp${record.price}`}</Text>
                    </div>
                </Col>
                <Col span={10} />
                <Col span={6} className='block place-items-center text-center'>
                   <Text className="block w-full text-[14px] text-[#4F555B]">Amount</Text>
                   <Text className="block text-[14px]">{record.amount}</Text>
                </Col>
                <Col span={2} />
                <Col span={6} className='text-right'>
                    <Text className="text-[16px] text-[#4F555B]">Subtotal</Text>
                    <Text className='text-[16px] font-semibold block mb-[8px]'>{`Rp${record.price * record.amount}`}</Text>
                </Col>
            </Row>
            )
        }
    }
]