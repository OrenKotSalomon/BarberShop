export interface Client {
    _id: string,
    email: string,
    username: string,
    password: string,
    businessName: string,
    logo: string,
    location: string | number,
    styles: object,
    packages: object[],
    futureAvailableCalender: object,
    // availableSpots: object
    clients: object,

}
