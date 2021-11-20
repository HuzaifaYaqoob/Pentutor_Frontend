


import root_reducer from './rootReducer'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

export const store = createStore(
    root_reducer,
    applyMiddleware(thunk)
)