import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [ inputManage, setInputManage ] = useState(initialState);

    const handleInputChange = (e) => {
        setInputManage({
            ...inputManage,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setInputManage(initialState);
    };

    return { handleInputChange, resetForm, inputManage };

}


