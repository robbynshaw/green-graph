import Account from '../models/Account';
import accounts from '../data/accounts.json'

export interface AccountsState {
    all : Array<Account>
}

const initialState : AccountsState = {
    all: accounts
}

interface AccountsAction {
    type: string
    payload: string
}

export const partialReducer = (state = initialState, action: AccountsAction) : AccountsState => {
    return state
}

export default partialReducer