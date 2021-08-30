import { TYPES } from "../types/types";

const initialState = {
    loading: false
}

export const formLoadingReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.startForm:
            return {
                ...state,
                loading: true
            };
        case TYPES.finishForm:
            return {
                ...state,
                loading: false
            }
        default:    
            return state;
    }
}