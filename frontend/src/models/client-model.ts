export interface Client {
    _id: string,
    email: string,
    username: string,
    password: string,
    businessName: string,
    logo: string,
    location: string | number,
    styles: object,
    packages: {
        description: string,
        displayImg: string,
        id: string,
        price: number
    }[]
    futureAvailableCalender: {
        from: Date,
        until: Date
    },
    availableSpots: {
        day: {
            id: string,
            time: string,
            istaken: boolean
        }[]
    },
    clients: object,
}

export interface Pack {
    description: string,
    displayImg: string,
    id: string,
    price: number
}