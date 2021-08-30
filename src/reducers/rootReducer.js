import { combineReducers } from 'redux';
import { crudReducer } from './crudReducer';
import { formLoadingReducer } from './formLoading';

export const rootReducer = combineReducers({
    crud: crudReducer,
    loadingForm: formLoadingReducer
})




