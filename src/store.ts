import { createStore, combineReducers } from 'redux'
import transactionReducer, { TransactionState } from './reducers/transaction'
import viewReducer, { ViewState } from './reducers/view'
import customViewReducer, { CustomViewsState } from './reducers/customViews'

export interface State {
    transactions : TransactionState
    view : ViewState
    customViews : CustomViewsState
}

const store = createStore(
    combineReducers({
        transactions: transactionReducer,
        view: viewReducer,
        customViews: customViewReducer,
    })
)

export default store