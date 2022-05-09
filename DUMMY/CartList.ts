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
        ]
    },
    {
        id: 2,
        status: 'sent',
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
        ]
    }
]