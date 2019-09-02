import { createStore, combineReducers } from 'redux'
import transactionReducer, { TransactionState } from './reducers/transaction'
import viewReducer, { ViewState } from './reducers/view'

export interface State {
    transactions : TransactionState
    view : ViewState
}

const store = createStore(
    combineReducers({
        transactions: transactionReducer,
        view: viewReducer
    })
)

export default store