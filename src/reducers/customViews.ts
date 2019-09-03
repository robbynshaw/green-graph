import CustomView from '../models/CustomView';
import views from '../data/views.json'

export interface CustomViewsState {
    all : Array<CustomView>
}

const initialState : CustomViewsState = {
    all: views
}

interface CustomViewsAction {
    type: string
    payload: string
}

export const partialReducer = (state = initialState, action: CustomViewsAction) : CustomViewsState => {
    return state
}

export default partialReducer