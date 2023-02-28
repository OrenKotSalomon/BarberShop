import { Client } from "../models/client-model"

export const SET_CLIENT = 'SET_CLIENT'

export interface ClientState {
    client: object
}

const initialState = {
    client: {}
}

type Action = { type: string, payload: object | object[] | string | Client }

export const clientReducer = (state: ClientState = initialState, action: Action) => {

    switch (action.type) {
        case SET_CLIENT:
            return { ...state, client: action.payload }

        default:
            return state
    }
}