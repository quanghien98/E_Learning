import * as Types from '../constants/actionTypes'
const initialState = []

export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_COURSE:
            return action.payload
        default:
            return state
    }
}