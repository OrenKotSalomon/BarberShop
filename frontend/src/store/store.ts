import { createStore, combineReducers } from 'redux'

import { clientReducer } from './client.reducer'
// import { userReducer } from './user.reducer.js'

const rootReducer = combineReducers({
    clientModule: clientReducer,
    // userModule: userReducer
})

export const store = createStore(rootReducer)

