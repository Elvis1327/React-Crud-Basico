import { createUserFetch, getUsersFetch, deleteUserFetch, getOneUserFetch, updateOneUserFetch } from "../helpers/crudFetch";
import { TYPES } from "../types/types"
import { finishCrudLoadingForm, startCrudLoadingForm } from "./formLoading";


export const getUsersData = () => {
    return async (dispatch) => {
        const resp = await getUsersFetch();
        dispatch(getUsers(resp)); 
    }
}

const getUsers = (users) => {
    return {
        type: TYPES.getAllUsers,
        payload: users
    };
};

export const createNewUser = (bodyForm) => {
    return async (dispatch) => {
        dispatch(startCrudLoadingForm())
        try {
            const resp = await createUserFetch(bodyForm);
            dispatch(createUser(resp));
            dispatch(finishCrudLoadingForm());
        } catch (error) {
            console.log(error);
            dispatch(finishCrudLoadingForm());
        }
    }
}

const createUser = (newUser) => {
    return {
        type: TYPES.addNewUser,
        payload: newUser
    }
};

export const deleteUserData = (id) => {
    return async (dispatch) => {
        const resp = await deleteUserFetch(id);
        dispatch(deleteUser(resp.id));
    }
}


const deleteUser = (id) => {
    return {
        type: TYPES.deleteOneUser,
        payload: id
    }
}

const getOneUser = (id) => {
    return {
        type: TYPES.getOneUser,
        payload: id
    };
};

export const getOneUserAction = (id) => {
    return async (dispatch) => {
        try{
            const data = await getOneUserFetch(id);
            dispatch(getOneUser(data._id))
        }catch(err){
            console.log(`ERR ${err}`)
        }
    }
};


const updateUser = (body) => {
    return {
        type: TYPES.editUser,
        payload: body
    }
};

export const updateUserAction = (body) => {
    return async (dispatch) => {
        try{
            const user = await updateOneUserFetch(body);
            console.log(user)
            dispatch(updateUser(user))

        }catch(err){
            console.log(`ERR ${err}`);
        };
    };
};




