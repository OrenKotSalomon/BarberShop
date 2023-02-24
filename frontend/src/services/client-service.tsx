

export const clientService = {

}

// demo first object, think more about it

const client: object = {
    id: '',
    email: '',
    username: '',
    password: '',
    businessName: '',
    logo: '',
    location: '',
    packages: [
        {
            id: '',
            displayImg: '',
            description: '',
            price: '',
        }
    ],
    futureAvailableCalender: {
        from: 'Date',
        untill: 'date'
    },
    // need to figure how to build this object name and keys,
    availableSpots: {
        day1: [
            {
                // need to configure name og object
                hour1: {
                    taken: false
                },
                hour2: {
                    taken: true
                },
                hour3: {
                    taken: false
                }

            }
        ],
        day2: [
            {
                // need to configure name og object
                hour1: {
                    taken: false
                },
                hour2: {
                    taken: true
                },
                hour3: {
                    taken: false
                }

            }
        ]
    },
    clients: {
        demoClient1: {
            // function get client by ID
            _id: '',
            userName: '',
            password: '',
            email: '',
            location: '',
            appointments: [
                {
                    id: '',
                    date: '',
                    time: '',
                    isCancled: false,
                    approvedToArrive: true, /// if false, client can charge fees for taking an appointment and the client axcxting like a clown.
                    // can cancle appointment atleast above 3 days of arrival time.
                },
            ],
            reviews: [
                {
                    id: '',
                    rating: 5,
                    title: '',
                    description: ''
                },
            ],

        }
    },
    // and more to come... need to sit with harel the BOZEAH.
    products: [],
    // can be a whole different collection but if we are using GRAPHQL everything will be easier and awsome.
}

const user: object = {
    _id: '',
    email: '',
    password: '',
    username: '',
    prefferedBarberId: '',
    purchaseHistory: [],
    appointments: [
        {
            packageId: '',
            date: '23/02/2023',
        }
    ],
    isLoyal: true,

}
