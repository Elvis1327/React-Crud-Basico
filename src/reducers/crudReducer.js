import { TYPES } from "../types/types";


const initialState = {
    allUsers: [],
    oneUser: {
        _id: null
    },
    loadingData: true,
}

export const crudReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.getAllUsers:
            return {
                ...state,
                allUsers: action.payload,
                loadingData: false
            };
        case TYPES.getOneUser:
            return {
                ...state,
                oneUser: state.allUsers.find(user => user._id === action.payload),
                loadingData: false
            };
        case TYPES.addNewUser:
            return {
                ...state,
                allUsers: [action.payload]
            }
        case TYPES.deleteOneUser:
            return {
                ...state,
                allUsers: state.allUsers.filter(e => e._id !== action.payload),
                loadingData: false
            };
        case TYPES.editUser:
            return {
                ...state,
                allUsers: state.allUsers.map(users => users._id === action.payload._id ? action.payload : users )
            }
        default:
            return state;
    }
} 


