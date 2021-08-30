import axios from 'axios';

const URL = `https://crud-practice13.herokuapp.com`;

export const getUsersFetch = async () => {
    const { data } = await axios.get(`${URL}/api/get-all`);
    return data.users;
}; 

export const createUserFetch = async (body) => {
    const { data } = await axios.post(`${URL}/api/create-user`, body);
    return data.usuario;
}

export const deleteUserFetch = async (id) => {
    const { data } = await axios.delete(`${URL}/api/delete-user/${id}`);
    return data;
}

export const getOneUserFetch = async (id) => {
    const {data } = await axios.get(`${URL}/api/get-one/${id}`);
    return data.oneUser;
};

export const updateOneUserFetch = async (body) => {
    const { data } = await axios.put(`${URL}/api/edit-user/${body._id}`, body);
    console.log(data)
    return data.user;
}


