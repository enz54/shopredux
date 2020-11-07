import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootreducer = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})

export default rootreducer