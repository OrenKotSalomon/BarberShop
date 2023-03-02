import { Client, Pack } from "../models/client-model"

export const SET_CLIENT = 'SET_CLIENT'
export const SET_PACK = 'SET_PACK'

export interface ClientState {
    client: Client | null,
    pack: Pack | null
}

const initialState = {
    client: null,
    pack: null
}

type Action = { type: string, payload: object | object[] | string | Client }

export const clientReducer = (state: ClientState = initialState, action: Action) => {

    switch (action.type) {
        case SET_CLIENT:
            return { ...state, client: action.payload }
        case SET_PACK:
            const selectedPack =  state.client?.packages.find((pack: Pack) => pack.id === action.payload)
            console.log('selectedPack:', selectedPack)
            return { ...state, pack: selectedPack }

        default:
            return state
    }
}