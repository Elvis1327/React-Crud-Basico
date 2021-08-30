import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../actions/crud';

export const AddUser = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.loadingForm)

    const { handleInputChange, resetForm, inputManage } = useForm({
        id: '',
        nombre: '',
        email: '',
        sueldo: ''
    });
    const { nombre, email, sueldo } = inputManage;

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNewUser(inputManage))
        resetForm();
    };

    return (
        <div className="_manage_main-container">
            <form onSubmit={handleSubmit}>
                <h1 className="_h1-add-user">Add a new User</h1>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="nombre"
                        onChange={handleInputChange}
                        placeholder="Introduce your name"
                        autoComplete="off"
                        value={nombre}
                        />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Introduce your email"
                        autoComplete="off"
                        value={email}
                        />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="sueldo"
                        onChange={handleInputChange}
                        placeholder="Introduce your sueldo"
                        autoComplete="off"
                        value={sueldo}
                        />
                </div>
                {/*  */}
                {(loading === true)
                    ?
                    (<button className="_form-spiner" type="submit">
                        <div className="loading-form"></div>
                    </button>)
                    :
                    (<button className="_manage-botton" type="submit">
                        Create
                    </button>)
                }
            </form>
        </div>
    )
}
