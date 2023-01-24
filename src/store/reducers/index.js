import {combineReducers} from 'redux';
import authReducer from './auth.reducer'
import currencyReducer from './currency.reducer'
import analysisReducer from './analysis.reducer'

const rootReducer=combineReducers({
    authReducer,
    currencyReducer,
    analysisReducer
})

export default rootReducer;