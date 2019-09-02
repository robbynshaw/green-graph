import update from 'immutability-helper'
import Url from 'url'

export interface ViewState {
    page : string
}

const initialState : ViewState = {
    page: '/transactions/'
}

export const CHANGE_TAB = 'VIEW.TAB.CHANGE'

interface ChangeTabAction {
    type: typeof CHANGE_TAB
    payload: string
}

type ViewActionTypes = ChangeTabAction

export const changeTab = (page : string) => ({
    type: CHANGE_TAB,
    payload: page,
})

export const actionCreators = {
    changeTab : changeTab
}

export const partialReducer = (state = initialState, action: ViewActionTypes) : ViewState => {
    switch (action.type) {
        case CHANGE_TAB: {
            const { payload } = action
            const tab = Url.parse(payload).path || ''
            return update(state, {
                page: { $set: tab }
            })
        }
        default: {
            return state
        }
    }
}

export default partialReducer