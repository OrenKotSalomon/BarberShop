import { Client } from "../models/client-model";
import { utilService } from "./util.service";

export const clientService = {
  createClient,
  getClients,
};

// demo first object, think more about it

const client: Client = {
  _id: "101",
  email: "lala@gmail.com",
  username: "Lala Hadid",
  password: "abc123",
  businessName: "Client Shop",
  logo: "url",
  location: "netanya",
  styles: {},
  packages: [
    {
      id: "102",
      displayImg: "url",
      description: "Hair only",
      price: 100,
    },
  ],
  futureAvailableCalender: {
    from: "Date",
    untill: "date",
  },
  // need to figure how to build this object name and keys,
  // availableSpots: {
  //     day1: [
  //         {
  //             // need to configure name og object
  //             line: {
  //                 id: '',
  //                 time: '',
  //                 istaken: false
  //             },
  //             line2: {
  //                 id: '',
  //                 time: '',
  //                 istaken: false
  //             },
  //             line3: {
  //                 id: '',
  //                 time: '',
  //                 istaken: false
  //             },

  //         }
  //     ],
  //     day2: [
  //         {
  //             // need to configure name og object
  //             line: {
  //                 id: '',
  //                 time: '',
  //                 istaken: false
  //             },
  //             line2: {
  //                 id: '',
  //                 time: '',
  //                 istaken: false
  //             },
  //             line3: {
  //                 id: '',
  //                 time: '',
  //                 istaken: false
  //             },

  //         }
  //     ]
  // },
  clients: {
    demoClient1: {
      // function get client by ID
      _id: "",
      userName: "",
      password: "",
      email: "",
      location: "",
      appointments: [
        {
          id: "",
          date: "",
          time: "",
          isCancled: false,
          approvedToArrive: true, /// if false, client can charge fees for taking an appointment and the client axcxting like a clown.
          // can cancle appointment atleast above 3 days of arrival time.
        },
      ],
      reviews: [
        {
          id: "",
          rating: 5,
          title: "",
          description: "",
        },
      ],
    },
  },
  // and more to come... need to sit with harel the BOZEAH.
  // products: [],
  // can be a whole different collection but if we are using GRAPHQL everything will be easier and awsome.
};
const CLIENT_DB = "clientDB";

function createClient() {
  const clients = [client];
  utilService.saveToStorage(CLIENT_DB, clients);
}

function getClients() {
  const client = utilService.loadFromStorage(CLIENT_DB);
  return client;
}

const user: object = {
  _id: "",
  email: "",
  password: "",
  username: "",
  prefferedClientId: "",
  purchaseHistory: [],
  appointments: [
    {
      packageId: "",
      date: "23/02/2023",
    },
  ],
  isLoyal: true,
};
