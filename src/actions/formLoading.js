import { TYPES } from "../types/types" 

export const startCrudLoadingForm = (value) => {
    return {
        type: TYPES.startForm,
        payload: value
    };
};

export const finishCrudLoadingForm = (value) => {
    return {
        type: TYPES.finishForm,
        payload: value
    }
}

