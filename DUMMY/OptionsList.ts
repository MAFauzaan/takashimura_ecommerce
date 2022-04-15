export interface IItems {
    id: number,
    name: string,
    description: string,
    type: string,
    sizes: any,
    reviews: Ireviews[]
}

export interface Ireviews {
    stars: number,
    description: string,
    date: any
}

export interface ISizes {
    size: string,
    stockAmount: number,
    price: number
}

export interface IitemList {
    id: string,
    name: string,
    description: string,
    items: IItems[],
}

export const ItemsList: IitemList[] = [
    {
        id: 'mk',
        name: 'Mukena',
        description: 'Untuk aktivitas sholat yang nyaman dengan mukena terbaik.',
        items: [
            {
                id: 1,
                name: 'Mukena Hijau',
                description: 'Ini adalah mukena hijau',
                type: 'mukena',
                sizes: [
                    {
                        size: 'S',
                        stockAmount: 25,
                        price: 25000,
                    },
                    {
                        size: 'M',
                        stockAmount: 10,
                        price: 27000,
                    },
                    {
                        size: 'L',
                        stockAmount: 23,
                        price: 28000,
                    },
                    {
                        size: 'XL',
                        stockAmount: 12,
                        price: 30000,
                    }
                ],
                reviews: [
                    {
                        stars: 5,
                        description: 'Mantap Gan',
                        date: new Date()
                    }
                ]
            }
        ]
    },
    {
        id: 'dst',
        name: 'Daster',
        description: 'Daster nyaman untuk segala aktivitas ibu di rumah.',
        items: [
            {
                id: 1,
                name: 'Daster Hijau',
                description: 'Ini adalah daster hijau',
                type: 'mukena',
                sizes: [
                    {
                        size: 'S',
                        stockAmount: 25,
                        price: 25000,
                    },
                    {
                        size: 'M',
                        stockAmount: 10,
                        price: 27000,
                    },
                    {
                        size: 'L',
                        stockAmount: 23,
                        price: 28000,
                    },
                    {
                        size: 'XL',
                        stockAmount: 12,
                        price: 30000,
                    }
                ],
                reviews: [
                    {
                        stars: 5,
                        description: 'Mantap Gan',
                        date: new Date()
                    }
                ]
            }
        ]
    },
    {
        id: 'btk',
        name: 'Batik',
        description: 'Cinta Indonesia kurang lengkap rasanya jika belum memakai batik asli buatan Indonesia..',
        items: [
            {
                id: 1,
                name: 'Batik Hijau',
                description: 'Ini adalah batik hijau',
                type: 'mukena',
                sizes: [
                    {
                        size: 'S',
                        stockAmount: 25,
                        price: 25000,
                    },
                    {
                        size: 'M',
                        stockAmount: 10,
                        price: 27000,
                    },
                    {
                        size: 'L',
                        stockAmount: 23,
                        price: 28000,
                    },
                    {
                        size: 'XL',
                        stockAmount: 12,
                        price: 30000,
                    }
                ],
                reviews: [
                    {
                        stars: 5,
                        description: 'Mantap Gan',
                        date: new Date()
                    }
                ]
            }
        ]
    },
    {
        id: 'as',
        name: 'Alat-Alat Sholat',
        description: 'Tidak hanya mukena, tersedia juga alat-alat sholat untuk membuat nyaman pengalaman beribadah.',
        items: [
            {
                id: 1,
                name: 'Sajadah Hijau',
                description: 'Ini adalah batik hijau',
                type: 'mukena',
                sizes: [
                    {
                        size: 'S',
                        stockAmount: 25,
                        price: 25000,
                    },
                ],
                reviews: [
                    {
                        stars: 5,
                        description: 'Mantap Gan',
                        date: new Date()
                    }
                ]
            }
        ]
    },
]