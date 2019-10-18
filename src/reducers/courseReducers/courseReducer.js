import * as Types from '../../constants/actionTypes';
const initialState = {};
export const course = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_SINGLE_COURSE:
            return action.payload;
        default:
            return state;
    }
};