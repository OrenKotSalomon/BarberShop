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
    futureAvailableCalender: object,
    clients: object,
}

export interface Pack {
    description: string,
    displayImg: string,
    id: string,
    price: number
}