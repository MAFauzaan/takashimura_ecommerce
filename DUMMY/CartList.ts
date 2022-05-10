export interface ICartList {
    id: number
    name: string,
    price: number,
    amount: number,
    status: string,
    rating: any,
    review: string
}

export const CartList: ICartList[] = [
    {
        id: 1,
        name: 'Mukena Renda Bordir Set Dewasa - Aleena.',
        price: 30000,
        amount: 2,
        status: 'shipment',
        rating: 0,
        review: ''
    },
    {
        id: 2,
        name: 'Sarung Model Kotak Kotak JOKOWI',
        price: 35000,
        amount: 4,
        status: 'shipment',
        rating: 0,
        review: ''
    },
    {
        id: 3,
        name: 'Batik Tulis Anjay',
        price: 150000,
        amount: 2,
        status: 'sent',
        rating: 4,
        review: ''
    },
    {
        id: 4,
        name: 'Sarung Model Kotak Kotak JOKOWI',
        price: 35000,
        amount: 1,
        status: 'sent',
        rating: 3,
        review: ''
    },
    {
        id: 5,
        name: 'Sajadah',
        price: 35000,
        amount: 4,
        status: 'shipment',
        rating: 2,
        review: ''
    },
    {
        id: 6,
        name: 'Longdress',
        price: 180000,
        amount: 1,
        status: 'sent',
        rating: 3,
        review: ''
    },
    {
        id: 7,
        name: 'Sarung Model Kotak Kotak PRABOWO',
        price: 35000,
        amount: 3,
        status: 'sent',
        rating: 4,
        review: ''
    }
]

export const orders = [
    {
        id: 1,
        status: 'shipment',
        statusLabel: 'Dalam Pengiriman',
        customer: {
            name: '',
            address: 'Jalan Menuju hatinya yang jauh di sana, nggak kegapai-gapai pula.',
            phoneNumber: '0812424738948374'
        },
        shipmentStatuses: [
            {
                id: '12312839012',
                date: '2022-05-09T08:10:50.526Z',
                label: 'Pesan diterima penjual'
            },
            {
                id: '12312839012',
                date: '2022-05-09T08:12:50.526Z',
                label: 'Pesan diverifikasi penjual'
            },
            {
                id: '32131232111',
                date: '2022-05-09T08:15:50.526Z',
                label: 'Menunggu pick up jasa pengantar'
            },
            {
                id: '32454353432',
                date: '2022-06-09T08:19:50.526Z',
                label: 'Pesanan dikirim'
            }
        ],
        invoiceNumber: 'INV/20220407/MPL/2206297779',
        date: '2022-05-09T08:10:50.526Z',
        items: [
            {
                id: 112121,
                name: 'Mukena Renda Bordir Set Dewasa - Aleena.',
                price: 30000,
                amount: 2,
                status: 'shipment',
                rating: 0
            },
            {
                id: 2321321,
                name: 'Sarung Model Kotak Kotak JOKOWI',
                price: 35000,
                amount: 4,
                status: 'shipment',
                rating: 0
            },
        ],
        paymentDetails: {
            sub: 280000,
            shipmentFee: 'Free',
            total: 280000
        }
    },
    {
        id: 2,
        status: 'sent',
        invoiceNumber: 'INV/20220503/MPL/2138291812',
        date: '2022-05-09T08:10:50.526Z',
        statusLabel: 'Pesanan Terkirim',
        customer: {
            name: '',
            address: 'Jalan Menuju hatinya yang jauh di sana, nggak kegapai-gapai pula.',
            phoneNumber: '0812424738948374'
        },
        shipmentStatuses: [
            {
                id: '12312839012',
                date: '2022-05-09T08:10:50.526Z',
                label: 'Pesan diterima penjual'
            },
            {
                id: '12312839012',
                date: '2022-05-09T08:12:50.526Z',
                label: 'Pesan diverifikasi penjual'
            },
            {
                id: '32454353432',
                date: '2022-05-09T08:15:50.526Z',
                label: 'Menunggu pick up jasa pengantar'
            },
            {
                id: '32454353432',
                date: '2022-06-09T08:19:50.526Z',
                label: 'Pesanan dikirim'
            }
        ],
        items: [
            {
                id: 1121,
                name: 'Mukena Renda Bordir Set Dewasa - Aleena.',
                price: 30000,
                amount: 2,
                status: 'shipment',
                rating: 0
            },
            {
                id: 232321,
                name: 'Sarung Model Kotak Kotak JOKOWI',
                price: 35000,
                amount: 4,
                status: 'shipment',
                rating: 0
            },
        ],
        paymentDetails: {
            sub: 280000,
            shipmentFee: 'Free',
            total: 280000
        }
    }
]

