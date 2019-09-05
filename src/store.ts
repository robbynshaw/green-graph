import { createStore, combineReducers } from 'redux'
import transactionReducer, { TransactionState } from './reducers/transaction'
import viewReducer, { ViewState } from './reducers/view'
import customViewReducer, { CustomViewsState } from './reducers/customViews'
import accountReducer, { AccountsState } from './reducers/account'

export interface State {
    transactions : TransactionState
    view : ViewState
    customViews : CustomViewsState
    accounts : AccountsState
}

const store = createStore(
    combineReducers({
        transactions: transactionReducer,
        view: viewReducer,
        customViews: customViewReducer,
        accounts: accountReducer,
    })
)

export default store