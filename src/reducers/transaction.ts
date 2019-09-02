import update from 'immutability-helper'
import Transaction from '../models/Transaction'
import bills from '../data/results.json'
import addPayees from '../cashlib/addPayees'

interface TransactionView {
    hideUncategorized: boolean
}

export interface TransactionState {
    all: Array<Transaction>
    view: TransactionView
}

const initialState : TransactionState = {
    all: bills.map(b => addPayees(b)),
    view: {
        hideUncategorized: false
    },
}

export const TOGGLE_UNCATEGORIZED = 'TRANS.UNCATEGORIZED.TOGGLE'

interface ToggleUncategorizedAction {
    type: typeof TOGGLE_UNCATEGORIZED
    payload: null
}

type TransactionActionTypes = ToggleUncategorizedAction

export const toggleUncategorized = () => ({
    type: TOGGLE_UNCATEGORIZED,
    payload: null,
})

export const actionCreators = {
    toggleUncategorized: toggleUncategorized
}

export const partialReducer = (state = initialState, action: TransactionActionTypes) : TransactionState => {
    switch (action.type) {
        case TOGGLE_UNCATEGORIZED: {
            let { view: { hideUncategorized }} = state
            return update(state, {
                view: {
                    hideUncategorized: { $set: !hideUncategorized}
                }
            })
        }
        default: {
            return state
        }
    }
}

export default partialReducer