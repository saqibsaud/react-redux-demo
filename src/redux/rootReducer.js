import { combineReducers } from 'redux'
import { cakeReducer } from './cakes/cakeReducer'

const rootReducer = combineReducers({
    cake: cakeReducer
})

export default rootReducer