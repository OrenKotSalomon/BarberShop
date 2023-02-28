
import { Client } from "../models/client-model";
import { clientService } from "../services/client-service";
import { SET_CLIENT } from "./client.reducer";
import { store } from "./store";

export async function loadClient(clientId: string, filterBy?: object) {
    // filter need interface
    try {

        const client: Client = await clientService.getById(clientId)
        store.dispatch({ type: SET_CLIENT, payload: client })
        return client
    } catch (error) {

        console.log('err', error);

    }

}